'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import PatternSlider from './PatternSlider';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <PatternSlider opacity={0.08} scale={2} speed={20} />
      <div className={styles.container}>
        {/* Contact Info */}
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <div className={styles.contactDetails}>
            <div className={styles.mainInfo}>
              <p>Kigali, Rwanda</p>
              <p>T: +250 787401292</p>
              <p>Email: <a href="mailto:plug@wegetyoupluged.com">plug@wegetyoupluged.com</a></p>
            </div>

            <div className={styles.supportInfo}>
              <p>Need help? contact:</p>
              <a href="mailto:support@globalplug.com">support@globalplug.com</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <div className={styles.links}>
            <Link href="/business">For Businesses</Link>
            <Link href="/products">Our Products</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/contact">Get a Quote</Link>
          </div>
        </div>

        {/* Social Media */}
        <div className={styles.column}>
          <h3>Follow Us</h3>
          <p>Stay updated with our latest smart products.</p>
          <div className={styles.socials}>
            {/* Using text for icons for now to keep it lightweight */}
            <Link href="#" className={styles.socialIcon}>LinkedIn</Link>
            <Link href="#" className={styles.socialIcon}>Instagram</Link>
            <Link href="#" className={styles.socialIcon}>Twitter</Link>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} GLOBAL PLUG. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

