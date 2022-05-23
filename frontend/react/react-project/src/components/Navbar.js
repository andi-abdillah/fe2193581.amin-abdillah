import { useEffect, useState } from "react"
import React from "react"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

export default function Navbar() {
  // TODO: answer here
  const [loggedIn, setLoggedIn] = useState(false);

  const checkLoggedIn = async () => {
    const session = await getSession();

    if (session) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };    

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div aria-label="Navbar">
      <img src="logo192.png" alt="App Logo" aria-label="App Logo"/>
      <h2 href="/" aria-label="App Title">Instagram Clone</h2>
      {loggedIn ? 
        <button aria-label="Profile"
          onClick={() => 
            {auth();}
          }>John Doe
        </button>
        :
        <button className="Login" aria-label="Login"
          onClick={() => 
            {auth();}
          }>Log In
        </button>
      }
    </div>
  );
}
