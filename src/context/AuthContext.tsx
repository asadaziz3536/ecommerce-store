import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase";



const AuthContext = createContext();

export const useAuth=()=> useContext(AuthContext)


export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      setLoading(false)
    });
    return () => unsubscribe();
  },[]);


  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};


