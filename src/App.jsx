import React, { useState } from 'react';
import LoginForm from './components/LoginForm.jsx';
import UserDashboard from './components/UserDashboard.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import './App.css'; // Global styles

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAdmin(true);
      setIsLoggedIn(true);
      setShowError(false);
    } else if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : isAdmin ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
      {showError && <ErrorMessage />}
    </div>
  );
}

export default App;
