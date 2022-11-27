import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdeKcjwALnUlo-S8MNISh6FjSz1f25TxA",
  authDomain: "login-page-1ecf8.firebaseapp.com",
  projectId: "login-page-1ecf8",
  storageBucket: "login-page-1ecf8.appspot.com",
  messagingSenderId: "9169375185",
  appId: "1:9169375185:web:a87115620f90d84a92daf0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const AuthContext = React.createContext();
//Store auth status
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser = currentUser;
  });

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default auth;
