import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';

const Header = () => {
  return (
    <header>
        <nav style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
    </header>
  )
}

export default Header