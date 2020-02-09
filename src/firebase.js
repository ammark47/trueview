import * as firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';


const config = {
  apiKey: "AIzaSyDvzzq5wOMCdSAMAfSmvErvlQM7Qn-juKs",
  databaseURL: "https://reviewed-c96e4.firebaseio.com",
  projectId: "reviewed-c96e4",
  // messagingSenderId: "85261328553"
}
const myFirebaseApp = firebase.initializeApp(config);
export const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)

const databaseRef = firebase.database();
export const usersRef = databaseRef.ref("users");


export function createUserInFirebase(userProfile) {
    usersRef.child(userProfile.profile.sub).set(userProfile)
}