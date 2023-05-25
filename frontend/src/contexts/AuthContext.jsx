import {createContext, useState} from "react";
import { useLocalStorage } from "../hooks/useStorage";

const initialAuthState = JSON.parse(localStorage.getItem("access_token")) || null;

export const AuthContext = createContext({initialAuthState});

const AuthContextProvider = ({children}) => {
  const [user, setUser, removeUser] = useLocalStorage(
    "user",
    JSON.stringify({})
  );

  const [token, setToken, removeToken] = useLocalStorage("access_token", null)

  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);
  const checkAuthentication = () => {
    if (!isAuthenticated) {
      logOut();
    }
    return isAuthenticated;
  };

  const logOut = () => {
    localStorage.remove("access_token");
    setIsAuthenticated(null);
  };

  const setLogIn = async (user) => {
    setToken(user?.token)
    delete user.token
    setUser(JSON.stringify(user));
    setIsAuthenticated(token);
    window.location.href = "/"
  };

  const value = {
    isAuthenticated,
    checkAuthentication,
    logOut,
    setLogIn,
    user: JSON.parse(user),
    setUser,
    removeUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
