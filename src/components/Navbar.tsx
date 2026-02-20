'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Button from './Button';
import PatternSlider from './PatternSlider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>

      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo1.png" alt="Global Plug" className={styles.logoImage} />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/business" className={styles.link}>For Businesses</Link>
          <Link href="/products" className={styles.link}>Products</Link>
          <Link href="/how-it-works" className={styles.link}>How It Works</Link>
          <Link href="/case-studies" className={styles.link}>Case Studies</Link>
        </div>

        <div className={styles.desktopCTA}>
          <Button href="/contact" variant="primary">Get a Quote</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.link} onClick={toggleMenu}>Home</Link>
          <Link href="/business" className={styles.link} onClick={toggleMenu}>For Businesses</Link>
          <Link href="/products" className={styles.link} onClick={toggleMenu}>Products</Link>
          <Link href="/how-it-works" className={styles.link} onClick={toggleMenu}>How It Works</Link>
          <Link href="/case-studies" className={styles.link} onClick={toggleMenu}>Case Studies</Link>
          <Button href="/contact" variant="primary" onClick={toggleMenu}>Get a Quote</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

