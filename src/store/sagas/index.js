import { takeLatest } from 'redux-saga/effects';
import { HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED } from '../actions/auth';
import { handleAuthentication } from '../../Auth0';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { usersRef, createUserInFirebase } from '../../firebase'

export function* parseHash() {
    const user = yield call(handleAuthentication);
    yield put({ type: USER_PROFILE_LOADED, user });
    console.log(user.profile.sub, usersRef)
    usersRef.child(user.profile.sub).once('value')
    .then(snapshot => {
        console.log('here')
        if (snapshot.exists()) {
            console.log('exists', snapshot)
        } else {
            createUserInFirebase(user, user.profile.sub)
        }
    })
}

export function* handleAuthenticationCallback() {
    yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export default function* rootSaga() {
    yield all([handleAuthenticationCallback()]);
}
