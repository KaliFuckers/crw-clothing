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
  googleProvider = new firebase.auth.GoogleAuthProvider();
  #auth;
  #firestore;

  constructor() {
    firebase.initializeApp(this.#config);
    this.googleProvider.setCustomParameters({ prompt: "select_account" });
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

  getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(async (user) => {
        resolve(user);
      }, reject);
    });
  };

  addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    //First we have to create the collection and send the data
    //Request in 2 steps
    //But batch can be used to create a request group

    const collectionRef = this.#firestore.collection(collectionKey);
    const batch = this.#firestore.batch();
    objectsToAdd.forEach((obj) => {
      //Create a free documents in this collection with a random firebase id
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  };

  convertCollectionsSnapshotToMap = (snapshot) => {
    const transformedCollection = snapshot.docs.map((doc) => {
      const { title, items } = doc.data();
      return {
        title,
        items,
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
      };
    });

    return transformedCollection;
  };

  get auth() {
    return this.#auth;
  }

  get firestore() {
    return this.#firestore;
  }

  signInWithGoogle = () => this.#auth.signInWithPopup(this.googleProvider);
}

export default new FirebaseServices();
