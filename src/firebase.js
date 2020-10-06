import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFfM0QN3O5SsWYEOjxn6JT6SWy3-We5pU",
  authDomain: "clone-15f82.firebaseapp.com",
  databaseURL: "https://clone-15f82.firebaseio.com",
  projectId: "clone-15f82",
  storageBucket: "clone-15f82.appspot.com",
  messagingSenderId: "70705669371",
  appId: "1:70705669371:web:45eb22ea65647005a53c5e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };