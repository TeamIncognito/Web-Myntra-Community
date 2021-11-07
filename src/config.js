// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD7MN-W_y62k6a4B-JGHFM_xSNTylmgfGw",
    authDomain: "myntracommunity-8b9e2.firebaseapp.com",
    projectId: "myntracommunity-8b9e2",
    storageBucket: "myntracommunity-8b9e2.appspot.com",
    messagingSenderId: "489020850534",
    appId: "1:489020850534:web:53224159adb1cdaa6308a7",
    measurementId: "G-38QR739C1D"
  };
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();
const storage= firebase.storage();

export {db,auth,storage}