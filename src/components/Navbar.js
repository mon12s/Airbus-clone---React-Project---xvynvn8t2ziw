import React, { useState } from 'react';
import './Navbar.css';
import Login from './Login';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Navbar = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setLoginVisible(!isLoginVisible);
    setLoggedIn(!isLoggedIn);
  };

  const handleCloseLoginForm = () => {
    setLoginVisible(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLoginVisible(false);
    // Perform any other logout actions if needed
  };

  return (
    <div>
      <header>
        <h2 className="logo">
          <FlightTakeoffIcon />
          Airbus
        </h2>

        <nav className="navigation">
          <button className="btnLogin-popup" onClick={handleLoginClick}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </nav>
      </header>

      {/* Login Form */}
      {isLoginVisible && <Login onClose={handleCloseLoginForm} />}
    </div>
  );
};

export default Navbar;
