// components/Layout.js
import React from 'react';
import NavigationBar from './NavigationBar';

const Layout = ({ children }) => (
  <div>
    <NavigationBar />
    <div className="container">
      <div className="main-content">{children[0]}</div>
      <div className="suggested-users">{children[1]}</div>
    </div>
  </div>
);

export default Layout;
