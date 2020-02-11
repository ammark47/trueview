import { takeLatest } from 'redux-saga/effects';
import { HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED, FIREBASE_PROFILE_LOADED } from '../actions/auth';
import { handleAuthentication } from '../../Auth0';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { usersRef, createUserInFirebase } from '../../firebase'

export function* parseHash() {
    const user = yield call(handleAuthentication);
    yield put({ type: USER_PROFILE_LOADED, user });
    const firebaseUser = yield call(checkIfUserExists, user.profile.sub)
    console.log(firebaseUser.val())
    if (firebaseUser.val())
        yield put({ type: FIREBASE_PROFILE_LOADED, firebaseUser})
    else 
        createUserInFirebase(user)
}

function checkIfUserExists(userID) {
    return usersRef.child(userID).once('value')
}


export function* handleAuthenticationCallback() {
    yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export default function* rootSaga() {
    yield all([handleAuthenticationCallback()]);
}
