import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { auth } from "../firebase/firebaseConfig";

interface CurrentUserData {
  displayName: string;
  email: string;
  photoURL: string;
}

interface AuthContextData {
  currentUser: CurrentUserData
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }) {
  const { pathname, events } = useRouter()
  const [currentUser, setCurrentUser] = useState({} as CurrentUserData)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [pathname])

  useEffect(() => {
    // Check that a new route is OK
    const handleRouteChange = (url: String) => {
      if (url !== '/' && !currentUser) {
        window.location.href = '/'
      }
    }
    // Check that initial route is OK
    if (pathname !== '/' && currentUser === null) {
      window.location.href = '/'
    }

    // Monitor routes
    events.on('routeChangeStart', handleRouteChange)
    return () => {
      events.off('routeChangeStart', handleRouteChange)
    }
  }, [currentUser])

  const value = {
    currentUser
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