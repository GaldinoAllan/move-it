import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { auth, createUserProfileDocument, firestore } from "../firebase/firebaseConfig";

interface CurrentUserData {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  createdAt: Date;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface AuthContextData {
  currentUser: CurrentUserData;
  loading: boolean;
  updateUser: (
    level: number,
    currentExperience: number,
    challengesCompleted: number
  ) => void;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }) {
  const { pathname, events } = useRouter()
  const [currentUser, setCurrentUser] = useState<CurrentUserData>()
  const [loading, setLoading] = useState(true)

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
            challengesCompleted: snapshot.data().challengesCompleted,
          }

          setCurrentUser(user)
          setLoading(false)
        })
      }

      setCurrentUser(null)
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  useEffect(() => {
    /// Check that a new route is OK
    const handleRouteChange = (url: String) => {

      if (url !== '/' && !currentUser) {
        window.location.href = '/'
      }
    }

    /// Check that initial route is OK
    if (pathname !== '/' && currentUser === null) {
      window.location.href = '/'
    }

    /// Monitor routes
    events.on('routeChangeStart', handleRouteChange)
    return () => {
      events.off('routeChangeStart', handleRouteChange)
    }
  }, [currentUser])

  function updateUser(
    level: number,
    currentExperience: number,
    challengesCompleted: number
  ) {
    const updateData = {
      ...currentUser,
      level,
      currentExperience,
      challengesCompleted
    }

    firestore.collection('users').doc(`${currentUser.uid}`).update(updateData)
  }

  const value = {
    currentUser,
    updateUser,
    loading
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