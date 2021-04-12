import firebase from 'firebase/app'

import 'firebase/firestore'; //for DB
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDtPJP3IonoMW498TT_7thjMVROD1MPuW8",
    authDomain: "todo-firebase-7d609.firebaseapp.com",
    projectId: "todo-firebase-7d609",
    storageBucket: "todo-firebase-7d609.appspot.com",
    messagingSenderId: "396190137532",
    appId: "1:396190137532:web:8049956ad3fb9b59ace4b9"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase