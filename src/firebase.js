import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDvzzq5wOMCdSAMAfSmvErvlQM7Qn-juKs",
  databaseURL: "https://reviewed-c96e4.firebaseio.com",
  projectId: "reviewed-c96e4",
  messagingSenderId: "85261328553"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const usersRef = databaseRef.child("userprofiles")