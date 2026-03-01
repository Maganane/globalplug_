'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Home() {
  const [demoActive, setDemoActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState({ arrow1: 0, arrow2: 0 });
  const aboutRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current || !missionRef.current || !visionRef.current) return;

      const aboutRect = aboutRef.current.getBoundingClientRect();
      const missionRect = missionRef.current.getBoundingClientRect();
      const visionRect = visionRef.current.getBoundingClientRect();
      
      const viewportHeight = window.innerHeight;

      // Calculate progress for arrow 1 (About -> Mission)
      const arrow1Start = aboutRect.bottom;
      const arrow1End = missionRect.top;
      const arrow1Progress = Math.min(Math.max((viewportHeight - arrow1Start) / (viewportHeight * 0.5), 0), 1);

      // Calculate progress for arrow 2 (Mission -> Vision)
      const arrow2Start = missionRect.bottom;
      const arrow2End = visionRect.top;
      const arrow2Progress = Math.min(Math.max((viewportHeight - arrow2Start) / (viewportHeight * 0.5), 0), 1);

      setScrollProgress({ arrow1: arrow1Progress, arrow2: arrow2Progress });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* About, Mission, Vision Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          {/* About Us - Left */}
          <div ref={aboutRef} className={`${styles.aboutCard} ${styles.aboutLeft}`}>
            <h2 className={styles.aboutTitle}>About Us</h2>
            <div className={styles.aboutContent}>
              <p>
                Global Plug is a smart technology company delivering innovative digital connectivity solutions that bridge the physical and digital world. Based in Rwanda and China, we design, develop, and deploy intelligent tools and infrastructure that enhance access, engagement, automation, and data-driven operations. We partner with organizations to build scalable, secure, and future-ready systems that power smarter ecosystems.
              </p>
              <h3 className={styles.aboutSubheading}>The Gap Between Physical Presence and Digital Intelligence</h3>
              <p>
                Many organizations invest in marketing campaigns, product activations, events, campuses, and retail experiences, yet struggle to capture meaningful data from these interactions. A brand may sponsor an event and attract hundreds of visitors but walk away without clear insight into who engaged or showed real interest. A product launch may generate excitement without structured leads or measurable results. Events may host large audiences, yet lack accurate tracking of attendance, session popularity, or participant behavior. Businesses process daily transactions without building connected customer profiles or loyalty intelligence. These gaps between physical engagement and digital insight lead to missed opportunities, inefficiencies, and limited growth — and this is exactly what we are here to solve.
              </p>
            </div>
          </div>

          {/* Arrow 1: About -> Mission */}
          <div 
            className={styles.arrowContainer}
            style={{
              '--arrow-progress': scrollProgress.arrow1,
            } as React.CSSProperties}
          >
            <svg className={styles.arrow} viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--ocean-blue)" stopOpacity={scrollProgress.arrow1} />
                  <stop offset="100%" stopColor="var(--ocean-blue)" stopOpacity={scrollProgress.arrow1 * 0.3} />
                </linearGradient>
              </defs>
              <path
                className={styles.arrowPath}
                d="M 50 30 L 50 80 Q 50 120, 90 120 L 690 120 Q 750 120, 750 180 L 750 220"
                fill="none"
                stroke="url(#arrowGradient1)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <polygon
                className={styles.arrowHead}
                points="750,220 743,210 757,210"
                fill="var(--ocean-blue)"
                opacity={scrollProgress.arrow1}
              />
            </svg>
          </div>

          {/* Mission - Right */}
          <div ref={missionRef} className={`${styles.aboutCard} ${styles.aboutRight}`}>
            <h2 className={styles.aboutTitle}>Mission</h2>
            <div className={styles.aboutContent}>
              <div className={styles.missionItem}>
                <h4>For Our Country:</h4>
                <p>To promote tech literacy and innovation, equipping citizens with the tools and knowledge to thrive in a digital economy.</p>
              </div>
              <div className={styles.missionItem}>
                <h4>For Business Owners:</h4>
                <p>To provide cutting-edge NFC solutions that enhance brand engagement, streamline operations, and help businesses grow smarter.</p>
              </div>
              <div className={styles.missionItem}>
                <h4>For Customers & Individuals:</h4>
                <p>To create seamless, secure, and meaningful connections between people and technology, improving everyday experiences and interactions.</p>
              </div>
            </div>
          </div>

          {/* Arrow 2: Mission -> Vision (inverted) */}
          <div 
            className={styles.arrowContainer}
            style={{
              '--arrow-progress': scrollProgress.arrow2,
            } as React.CSSProperties}
          >
            <svg className={styles.arrow} viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrowGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="var(--ocean-blue)" stopOpacity={scrollProgress.arrow2} />
                  <stop offset="100%" stopColor="var(--ocean-blue)" stopOpacity={scrollProgress.arrow2 * 0.3} />
                </linearGradient>
              </defs>
              <path
                className={styles.arrowPath}
                d="M 750 30 L 750 80 Q 750 120, 710 120 L 110 120 Q 50 120, 50 180 L 50 220"
                fill="none"
                stroke="url(#arrowGradient2)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <polygon
                className={styles.arrowHead}
                points="50,220 43,210 57,210"
                fill="var(--ocean-blue)"
                opacity={scrollProgress.arrow2}
              />
            </svg>
          </div>

          {/* Vision - Left */}
          <div ref={visionRef} className={`${styles.aboutCard} ${styles.aboutLeft}`}>
            <h2 className={styles.aboutTitle}>Vision</h2>
            <div className={styles.aboutContent}>
              <div className={styles.missionItem}>
                <h4>For Our Country:</h4>
                <p>We aim to drive Rwanda's digital future by promoting tech literacy and innovation, empowering citizens with the skills and tools to thrive in a connected world, and contributing to sustainable national growth.</p>
              </div>
              <div className={styles.missionItem}>
                <h4>For Business Owners:</h4>
                <p>We envision helping businesses unlock their full potential through NFC technology, making brand engagement smarter, faster, and more personal, while fostering growth, efficiency, and stronger customer relationships.</p>
              </div>
              <div className={styles.missionItem}>
                <h4>For Customers & Individuals:</h4>
                <p>We strive to create seamless, meaningful connections between people and brands, empowering individuals to interact with technology effortlessly and benefit from a more connected, convenient, and innovative daily experience.</p>
              </div>
            </div>
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

