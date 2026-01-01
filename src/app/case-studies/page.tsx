import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import styles from './CaseStudies.module.css';

export default function CaseStudiesPage() {
  return (
    <main className={styles.container}>
      <Navbar />

      <header className={styles.header}>
        <h1 className={styles.title}>Success Stories</h1>
        <p className={styles.subtitle}>
          See how leading Rwandan companies are using Global Plug to drive engagement and modernize their brand.
        </p>
      </header>

      <section className={styles.casesSection}>
        {/* Case Study 1 */}
        <article className={styles.caseStudy}>
          <div className={styles.caseImage}>Kigali Tech Summit Photo</div>
          <div className={styles.caseContent}>
            <span className={styles.clientName}>Kigali Tech Summit 2024</span>
            <h2 className={styles.caseTitle}>Streamlining Event Access</h2>
            
            <div className={styles.caseDetails}>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>Challenge:</span>
                <p className={styles.detailText}>Long queues at registration and paper agendas that were discarded immediately.</p>
              </div>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>Solution:</span>
                <p className={styles.detailText}>NFC-enabled silicone wristbands that served as entry tickets and linked to a live digital agenda.</p>
              </div>
            </div>

            <div className={styles.results}>
              <span className={styles.detailLabel}>Key Result:</span>
              <p className={styles.detailText}>Reduced check-in time by 70% and generated 5,000+ digital agenda views.</p>
            </div>
          </div>
        </article>

        {/* Case Study 2 */}
        <article className={styles.caseStudy}>
          <div className={styles.caseImage}>EcoBank Promo Photo</div>
          <div className={styles.caseContent}>
            <span className={styles.clientName}>Bank of Kigali (Campaign)</span>
            <h2 className={styles.caseTitle}>Modernizing Corporate Gifts</h2>
            
            <div className={styles.caseDetails}>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>Challenge:</span>
                <p className={styles.detailText}>Traditional year-end diaries were seen as "generic" and lacked digital conversion tracking.</p>
              </div>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>Solution:</span>
                <p className={styles.detailText}>Premium leather journals with an embedded NFC chip linking to a personalized CEO video message.</p>
              </div>
            </div>

            <div className={styles.results}>
              <span className={styles.detailLabel}>Key Result:</span>
              <p className={styles.detailText}>Achieved a 45% engagement rate (scan-to-gift ratio), highest in their campaign history.</p>
            </div>
          </div>
        </article>

        {/* Case Study 3 */}
        <article className={styles.caseStudy}>
          <div className={styles.caseImage}>StartUp Rwanda Photo</div>
          <div className={styles.caseContent}>
            <span className={styles.clientName}>Rwanda Innovation Fund</span>
            <h2 className={styles.caseTitle}>Networking Made Simple</h2>
            
            <div className={styles.caseDetails}>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>Challenge:</span>
                <p className={styles.detailText}>Founders struggled to share portfolios and pitch decks quickly during speed networking.</p>
              </div>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>Solution:</span>
                <p className={styles.detailText}>Smart metal business cards that instantly transfer contact info and deck links with a tap.</p>
              </div>
            </div>

            <div className={styles.results}>
              <span className={styles.detailLabel}>Key Result:</span>
              <p className={styles.detailText}>Facilitated over 1,200 connections in a single afternoon.</p>
            </div>
          </div>
        </article>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Ready to write your success story?</h3>
          <Button href="/contact">Start Your Project</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

