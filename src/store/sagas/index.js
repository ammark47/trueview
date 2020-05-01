import { takeLatest } from 'redux-saga/effects';
import { HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED, POSTGRES_PROFILE_LOADED } from '../actions/auth';
import { handleAuthentication } from '../../Auth0';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { checkIfUserExists, createUserInFirebase } from '../../firebase';
import { createDevToken } from '../../streamchat';
import { checkAndInsertUser, insertUserInDB } from '../../models/users';

export function* parseHash() {
    const user = yield call(handleAuthentication);
    yield put({ type: USER_PROFILE_LOADED, user });

    const postgresUser = yield call(checkAndInsertUser, user)
    var postgresUserRedux

    if (postgresUser !== undefined) {
        postgresUserRedux = postgresUser
    }
    // add streamchat token and create user in postgres
    else {
        const streamChatToken = createDevToken(user.profile.nickname)
        user.chatToken = streamChatToken 
        // insertUserInDB(user)
        postgresUserRedux = user
    }

    yield put({ type: POSTGRES_PROFILE_LOADED, postgresUserRedux })
    
}


export function* handleAuthenticationCallback() {
    yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export default function* rootSaga() {
    yield all([handleAuthenticationCallback()]);
}
