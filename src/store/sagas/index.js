import { takeLatest } from 'redux-saga/effects';
import { HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED } from '../actions/auth';
import { handleAuthentication } from '../../Auth0';
import { all, call, put, takeEvery } from 'redux-saga/effects';

export function* parseHash() {
    const user = yield call(handleAuthentication);
    yield put({ type: USER_PROFILE_LOADED, user });
}

export function* handleAuthenticationCallback() {
    yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

// replace the current rootSaga generator
export default function* rootSaga() {
    yield all([handleAuthenticationCallback()]);
}
