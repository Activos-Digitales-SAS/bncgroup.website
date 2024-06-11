import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logoBNC.png" alt="BNC Group" className={styles.logoImage} />
        <span className={styles.logoText}>BNC GROUP</span>
      </div>
      <ul className={isMobile ? `${styles.navLinks} ${styles.mobile}` : styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/servicios" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink to="/nosotros" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="/testimonios" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
            Testimonios
          </NavLink>
        </li>
        <li>
          <button className={styles.button}>SAGRILAFT</button>
        </li>
      </ul>
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
