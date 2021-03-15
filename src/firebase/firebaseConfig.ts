import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

interface UserData {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyB_McwizGpO7sROMRTGzyror7mtIEbZp1c",
  authDomain: "dextra-move-it.firebaseapp.com",
  projectId: "dextra-move-it",
  storageBucket: "dextra-move-it.appspot.com",
  messagingSenderId: "887953051682",
  appId: "1:887953051682:web:d2279b448e03ce6789fa7b",
  measurementId: "G-PHB3FC91QB"
};

export const createUserProfileDocument = async (
  userAuth: UserData,
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        level: 1,
        currentExperience: 0,
        challengesCompleted: 0,
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef
}

export const getUsers = async () => {
  const usersRef = firestore.collection('users')
  const usersSnapshot = await usersRef.get()

  return usersSnapshot.docs.map(doc => doc.data());
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase