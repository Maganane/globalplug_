'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Home() {
  const [demoActive, setDemoActive] = useState(false);

  return (
    <main className={styles.container}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Turn Everyday Items into <span>Digital Gateways</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Global Plug embeds NFC technology into custom products, giving Rwandan businesses a smart, tangible touchpoint to instantly connect with their audience.
          </p>
          <div className={styles.ctaGroup}>
            <Button href="/products">Explore Our Smart Products</Button>
            <Button href="/contact" variant="outline">Request a Demo</Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.solutions}>
        <h2 className={styles.sectionTitle}>The Simple Three-Step Solution</h2>
        <div className={styles.solutionsGrid}>
          <div className={styles.solutionCard}>
            <div className={styles.iconWrapper}>1</div>
            <h3 className={styles.cardTitle}>You Provide the Link</h3>
            <p className={styles.cardText}>
              Website, contact card, campaign landing page—whatever you want your audience to see.
            </p>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.iconWrapper}>2</div>
            <h3 className={styles.cardTitle}>We Design & Embed</h3>
            <p className={styles.cardText}>
              We program the NFC chips and integrate them into high-quality bracelets, badges, or journals.
            </p>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.iconWrapper}>3</div>
            <h3 className={styles.cardTitle}>Tap & Engage</h3>
            <p className={styles.cardText}>
              Your audience simply taps their phone to the product to instantly access your digital content.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive NFC Demo */}
      <section className={styles.demoSection}>
        <h2 className={styles.sectionTitle}>Experience the Magic</h2>
        <p>Tap the button below to simulate an NFC interaction.</p>
        
        <div className={styles.demoContainer}>
          {!demoActive ? (
            <button 
              className={styles.tapTrigger}
              onClick={() => setDemoActive(true)}
            >
              Tap to Connect
            </button>
          ) : (
            <div className={`${styles.demoContent} ${demoActive ? styles.active : ''}`}>
              <h3>🚀 Welcome!</h3>
              <p>This is where your client lands instantly after tapping your product.</p>
              <br/>
              <Button onClick={() => setDemoActive(false)} variant="secondary">
                Reset Demo
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

