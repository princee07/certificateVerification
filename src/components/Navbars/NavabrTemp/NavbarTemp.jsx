// src/components/Navbars/NavbarTemp/NavbarTemp.js
import React from 'react';
import styles from './NavbarTemp.module.css';

const NavbarTemp = ({ onLoginClick, onSignupClick }) => {
  return (
    <div className={styles.divcenter}>
    <header className={styles.header}>
      <div className={styles.logoSearchContainer}>
        <div className={styles.logo}>CertifyMe</div>
        <input
          className={styles.search}
          type="text"
          placeholder="Search resources"
        />
      </div>
      <nav className={styles.nav}>
        <a href="/">All Resources</a>
        <a href="#" onClick={onLoginClick}>Log In</a> {/* Call onLoginClick when clicked */}
      
      </nav>
    </header>
    </div>
  );
};

export default NavbarTemp;
