import { takeLatest } from 'redux-saga/effects';

import { HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED, POSTGRES_PROFILE_LOADED } from '../actions/auth';
import { handleAuthentication } from '../../Auth0';

import { SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS } from '../actions/products'

import { all, call, put, takeEvery, spawn } from 'redux-saga/effects';
import { searchAllWalmartProducts } from '../../models/product'
import { checkAndInsertUser } from 'models/users';

export function* parseHash() {
    const user = yield call(handleAuthentication)
    yield put({ type: USER_PROFILE_LOADED, user })

    const userInfoPostgres = yield call(checkAndInsertUser, user)
    yield put({ type: POSTGRES_PROFILE_LOADED, userInfoPostgres })
}

export function* fetchProductSearch(action) {
    try {
        const allProductsFromWalmart = yield call(searchAllWalmartProducts, action.searchKey)
        yield put({ type: SEARCH_PRODUCT_SUCCESS, allProducts: allProductsFromWalmart})
    } catch (err) {
        console.error(err)
    }
}

export function* handleAuthenticationCallback() {
    yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export function* handleSearchRequest() {
    yield takeLatest(SEARCH_PRODUCT_REQUEST, fetchProductSearch)
}

export default function* rootSaga() {
    yield spawn(handleAuthenticationCallback)
    yield spawn(handleSearchRequest)

}
