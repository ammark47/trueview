import { takeLatest } from 'redux-saga/effects';
import { HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED, FIREBASE_PROFILE_LOADED } from '../actions/auth';
import { handleAuthentication } from '../../Auth0';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { checkIfUserExists, createUserInFirebase } from '../../firebase';
import { createDevToken } from '../../streamchat';

export function* parseHash() {
    const user = yield call(handleAuthentication);
    yield put({ type: USER_PROFILE_LOADED, user });
    
    const firebaseUser = yield call(checkIfUserExists, user.profile.sub)
    var firebaseUserVal = null
    if (firebaseUser.val()){
        firebaseUserVal = firebaseUser.val()
    }
    else {
        const streamChatToken = createDevToken(user.profile.nickname)
        user.chatToken = streamChatToken
        createUserInFirebase(user)
        firebaseUserVal = user
    }
    console.log(firebaseUserVal)
    yield put({ type: FIREBASE_PROFILE_LOADED, firebaseUserVal})
}


export function* handleAuthenticationCallback() {
    yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export default function* rootSaga() {
    yield all([handleAuthenticationCallback()]);
}
