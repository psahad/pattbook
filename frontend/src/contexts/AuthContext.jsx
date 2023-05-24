import {createContext} from "react";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
  const appValue = "this is from App context";
  return (
    <AuthContext.Provider value={appValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
