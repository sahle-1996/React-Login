import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  // State management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  // Function to handle login
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setShowError(false);
    } else if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setShowError(false);
  };

  return (
    <div className="App">
      {!isLoggedIn && !isAdmin && <LoginForm onLogin={handleLogin} />}
      {isLoggedIn && isAdmin && <AdminDashboard onLogout={handleLogout} />}
      {isLoggedIn && !isAdmin && <UserDashboard onLogout={handleLogout} />}
      {showError && <ErrorMessage />}
    </div>
  );
}

export default App;
