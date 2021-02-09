import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3wibBmdZFYVQUzhNQzFdIiTnzsVX6pG4",
  authDomain: "pagina-prueba-e41ed.firebaseapp.com",
  databaseURL: "https://pagina-prueba-e41ed.firebaseio.com",
  projectId: "pagina-prueba-e41ed",
  storageBucket: "pagina-prueba-e41ed.appspot.com",
  messagingSenderId: "319841526621",
  appId: "1:319841526621:web:f7f22a8436946258f97eb4",
  measurementId: "G-8Z3NKDXXE9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (errorx) {
      console.log("error creating user", errorx);
    }
  }
  return userRef;
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;
