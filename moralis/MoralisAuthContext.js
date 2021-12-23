import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";


const MoralisAuthContext = createContext();

const MoralisAuthProvider = ({ children }) => {
  const {user } = useMoralis()
  const router = useRouter();

  useEffect(() => checkUserAuth(), [user, router]);

  const checkUserAuth = async () => {
  
    if (!user) {
     
      router.push('/auth')
    }
  
  };



  return  (
    <MoralisAuthContext.Provider value={user}>
      {children}
    </MoralisAuthContext.Provider>
  )
};

export default MoralisAuthProvider