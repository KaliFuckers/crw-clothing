import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

class FirebaseServices {
  #config = {
    apiKey: "AIzaSyCDLTIOK2HrOV7kSiYgGTWCFcm4opHybUM",
    authDomain: "crwn-db-4875b.firebaseapp.com",
    projectId: "crwn-db-4875b",
    storageBucket: "crwn-db-4875b.appspot.com",
    messagingSenderId: "354240056492",
    appId: "1:354240056492:web:496f80a81931949efda309",
    measurementId: "G-WW751GJ27C",
  };
  #provider = new firebase.auth.GoogleAuthProvider();
  #auth;
  #firestore;

  constructor() {
    firebase.initializeApp(this.#config);
    this.#provider.setCustomParameters({ prompt: "select_account" });
    this.#auth = firebase.auth();
    this.#firestore = firebase.firestore();
  }

  createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = this.#firestore.doc(`/users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const { email, displayName } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          email,
          displayName,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("Error create User", error.message);
      }
    }

    return userRef;
  };

  get auth() {
    return this.#auth;
  }

  get firestore() {
    return this.#firestore;
  }

  signInWithGoogle = () => this.#auth.signInWithPopup(this.#provider);
}

export default new FirebaseServices();
