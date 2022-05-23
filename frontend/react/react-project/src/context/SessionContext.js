import { createContext, useState } from "react"

export const SessionContext = createContext({
  // TODO: answer here
  user: {},
  loggedIn: false,
  setUser: () => {},
  setLoggedIn: () => {},

})

export const SessionProvider = ({ children }) => {
  // TODO: answer here
  const [user, setUser] = useState({
    id: "",
    username: "",
    image: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SessionContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </SessionContext.Provider>
  );

}
