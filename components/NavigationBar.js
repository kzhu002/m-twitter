// components/NavigationBar.js
import React from 'react';

const NavigationBar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/new">New Page</a></li>
    </ul>
    <div className="profile-option">
      <a href="/profile">Profile</a>
    </div>
  </nav>
);

export default NavigationBar;
