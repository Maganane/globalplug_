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
            Engage at the <span>Speed of a Tap</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Global Plug embeds NFC technology into custom products, giving Rwandan businesses a smart, tangible touchpoint to instantly connect with their audience.
          </p>
          <div className={styles.ctaGroup}>
            <Button href="/products">View Products</Button>
            <Button href="/contact" variant="outline">Request a Quote</Button>
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
            <h3 className={styles.cardTitle}>Design & Configure</h3>
            <p className={styles.cardText}>
              Choose to design the products yourself or let us handle it. Configure your links securely.
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
              <video
                src="/videos/global-plug-demo.mp4"
                className={styles.demoVideo}
                autoPlay
                loop
                muted
                playsInline
              />
              <Button onClick={() => setDemoActive(false)} variant="secondary" className={styles.resetButton}>
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

