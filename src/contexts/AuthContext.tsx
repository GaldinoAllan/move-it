import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'

import Cookies from 'js-cookie';
import {
  auth,
  createUserProfileDocument,
  firestore,
  signInWithGoogle
} from "../firebase/firebaseConfig";


interface CurrentUserData {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  createdAt: Date;
  level: number;
  currentExperience: number;
  totalExperience: number;
  challengesCompleted: number;
}

interface AuthContextData {
  currentUser: CurrentUserData;
  signIn: () => void;
  signOut: () => void;
  updateUser: (
    level: number,
    currentExperience: number,
    totalExperience: number,
    challengesCompleted: number
  ) => void;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }) {
  const route = useRouter();
  const [currentUser, setCurrentUser] = useState<CurrentUserData>(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          const user = {
            uid: snapshot.id,
            displayName: snapshot.data().displayName,
            email: snapshot.data().email,
            photoURL: snapshot.data().photoURL,
            createdAt: snapshot.data().createdAt,
            level: snapshot.data().level,
            currentExperience: snapshot.data().currentExperience,
            totalExperience: snapshot.data().totalExperience,
            challengesCompleted: snapshot.data().challengesCompleted,
          }

          setCurrentUser(user)
          Cookies.set('user', JSON.stringify(user))
          route.pathname === '/' && route.push('/home')
        })
      }
      setCurrentUser(null)
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  async function signIn() {
    await signInWithGoogle()
  }

  function signOut() {
    auth.signOut()
    Cookies.set('user', '')
    route.push('/');
  }

  function updateUser(
    level: number,
    currentExperience: number,
    totalExperience: number,
    challengesCompleted: number
  ) {
    const updateData = {
      ...currentUser,
      level,
      currentExperience,
      totalExperience,
      challengesCompleted
    }

    firestore.collection('users').doc(`${currentUser.uid}`).update(updateData)
  }

  const value = {
    signIn,
    signOut,
    currentUser,
    updateUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}