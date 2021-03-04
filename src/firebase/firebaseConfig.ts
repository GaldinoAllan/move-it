import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_McwizGpO7sROMRTGzyror7mtIEbZp1c",
  authDomain: "dextra-move-it.firebaseapp.com",
  projectId: "dextra-move-it",
  storageBucket: "dextra-move-it.appspot.com",
  messagingSenderId: "887953051682",
  appId: "1:887953051682:web:d2279b448e03ce6789fa7b",
  measurementId: "G-PHB3FC91QB"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase