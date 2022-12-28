import React, { createContext, useState } from 'react'
import app from '../Firebase/Firebase.config'
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

function AuthProvider({children}) {
  const [isLoding, setLoading] = useState(true)

  //create user
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //signIn user
  const signIn = (email, password) =>{
    setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
  }

  //logOut user
  const logOut = () =>{
    setLoading(true)
     return signOut(auth)
  }

     const authInfo ={
        createUser,
        signIn,
        logOut
        
     }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider