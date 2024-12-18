// components/Header/Header.jsx
'use client';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';


/**
 * Header component
 * 
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  // State to manage hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Toggle hamburger menu
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>Pora Mixer</Link>
        </div>
        <div className={styles.desktopMenu}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/flyer">Event</Link></li>
            <li>
              <Link
                href={`https://wa.me/+2348033061107`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.registerButton}>
          <a href="https://forms.gle/j9D2rXfxrFGNk6m66" target="_blank" rel="noopener noreferrer">
            Sign Up
          </a>
        </div>
        <div className={styles.mobileMenu}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            Menu
          </div>
          {isOpen && (
            <ul className={styles.mobileMenuList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/flyer">Event</Link></li>
              <li>
                <Link
                  href={`https://wa.me/+2348033061107`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://forms.gle/j9D2rXfxrFGNk6m66" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;