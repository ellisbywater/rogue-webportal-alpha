import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Moralis from "./init";
import { RogueUser, Applicant } from "./models/RogueUser";

const MoralisAuthContext = createContext();

export default MoralisAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => checkUserAuth(), []);

  const checkUserAuth = async () => {
    const user = Moralis.User.current();
    if (!user) {
      setUser(null);
    }
    setUser(user);
  };

  const registerUser = async (user) => {
    const newUser = new RogueUser();
    newUser.set("username", user.username);
    newUser.set("email", user.emailAddr);
    newUser.set("password", user.password);
    newUser.set("phone", user.phone);
    newUser.set("termsAccepted", user.termsAccepted);
    try {
      await newUser.signUp();
      router.push("/dashboard");
    } catch (error) {
      alert("Error: " + error.code + " " + error.message);
    }
  };

  const login = async (username, password) => {};

  const logout = async () => {};
};
