
import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <div style={{padding: '2rem', fontFamily:'Arial'}}>
          <h1>Parent Component</h1>

          {isLoggedIn ? (
            <h2>You are logged in !</h2>
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
        </div>
    </div>
  )
}

export default App
