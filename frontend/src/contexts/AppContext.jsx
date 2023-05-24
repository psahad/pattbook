import {createContext} from "react";

export const AppContext = createContext({});

const AppContextProvider = ({children}) => {
  const appValue = "this is from App context";
  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
