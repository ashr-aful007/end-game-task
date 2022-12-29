import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase/Firebase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

function AuthProvider({children}) {
  const [isLoding, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  

  //create user
  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //signIn user
  const signIn = (email, password) =>{
    setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setLoading(false)
        setUser(currentUser)
      })
      return () => unsubscribe()
  },[])

  //logOut user
  const logOut = () =>{
    setLoading(true)
     return signOut(auth)
  }

     const authInfo ={
        createUser,
        signIn,
        logOut,
        user,
        isLoding    
     }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider