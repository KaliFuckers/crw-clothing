import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCDLTIOK2HrOV7kSiYgGTWCFcm4opHybUM",
  authDomain: "crwn-db-4875b.firebaseapp.com",
  projectId: "crwn-db-4875b",
  storageBucket: "crwn-db-4875b.appspot.com",
  messagingSenderId: "354240056492",
  appId: "1:354240056492:web:496f80a81931949efda309",
  measurementId: "G-WW751GJ27C",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
