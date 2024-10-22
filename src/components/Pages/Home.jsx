
import React from "react";
import './Home.module.css';

const Home= () => {
  return (
    <nav className="navbar">
      <div className="logo">CertifyIt</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#upload">Upload Certificate</a></li>
        <li><a href="#verify">Verify Certificate</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Home;
