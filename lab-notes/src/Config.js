// Import the functions you need from the SDKs you needimport { initializeApp, firebase } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/firestore'
import store from './store'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSfKHpOOdTozXf9rOkRKu1zodVelERjZY",
  authDomain: "mynotes-e4012.firebaseapp.com",
  projectId: "mynotes-e4012",
  storageBucket: "mynotes-e4012.appspot.com",
  messagingSenderId: "174481908033",
  appId: "1:174481908033:web:3f983a95617d8e8bdbc1c0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); //
console.log(firebase)
export const db = getFirestore(app);
export { auth } //
console.log(db)

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
    const usuarioActivo = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectarUsuario', usuarioActivo)
    // ...
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
    // User is signed out
    console.log('debes iniciar sesión')
  }
});
