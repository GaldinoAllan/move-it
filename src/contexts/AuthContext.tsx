import { createContext, useContext, useEffect, useState } from "react";
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
  const [currentUser, setCurrentUser] = useState({} as CurrentUserData)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

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