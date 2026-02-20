import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import styles from './Business.module.css';

export default function BusinessPage() {
  return (
    <main className={styles.container}>
      <Navbar />

      <header className={styles.header}>
        {/* Fading Background Images */}
        <div className={styles.backgroundContainer}>
          <div className={styles.backgroundImage} style={{ backgroundImage: "url('/images/business/image1.jpg')", animationDelay: '0s' }}></div>
          <div className={styles.backgroundImage} style={{ backgroundImage: "url('/images/business/image2.jpg')", animationDelay: '5s' }}></div>
        </div>

        <div className={styles.contentWrapper}>
          <h1 className={styles.headerTitle}>For Businesses</h1>
          <p className={styles.headerSubtitle}>
            Modernize your corporate engagement with smart, NFC-enabled products that bridge the physical and digital worlds.
          </p>
        </div>
      </header>

      <section className={styles.roiSection}>
        <h2 className={styles.sectionTitle}>Why Go Smart?</h2>
        <p className={styles.sectionSubtitle}>Maximize your Return on Engagement (ROE).</p>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3x</div>
            <div className={styles.statLabel}>Higher Engagement</div>
            <p>From static paper to interactive digital experiences.</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Trackable</div>
            <p>Measure offline marketing with real-time analytics.</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>0</div>
            <div className={styles.statLabel}>Lost Contacts</div>
            <p>Directly save details to phones. No more lost business cards.</p>
          </div>
        </div>
      </section>

      <section className={styles.useCases}>
        <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '60px' }}>
          Tailored Use Cases
        </h2>
        <div className={styles.caseGrid}>
          <div className={styles.caseCard}>
            <div className={styles.caseContent}>
              <h3 className={styles.caseTitle}>Event Marketing</h3>
              <p className={styles.caseText}>
                Replace paper flyers with smart wristbands. Attendees tap to view schedules, speaker bios, or instant giveaways.
              </p>
            </div>
          </div>

          <div className={styles.caseCard}>
            <div className={styles.caseContent}>
              <h3 className={styles.caseTitle}>Corporate Gifting</h3>
              <p className={styles.caseText}>
                Gift premium journals that lead to a personalized video message or digital year-in-review report.
              </p>
            </div>
          </div>

          <div className={styles.caseCard}>
            <div className={styles.caseContent}>
              <h3 className={styles.caseTitle}>Employee Onboarding</h3>
              <p className={styles.caseText}>
                Smart badges that link to the employee handbook, key contacts, or office access credentials.
              </p>
            </div>
          </div>

          <div className={styles.caseCard}>
            <div className={styles.caseContent}>
              <h3 className={styles.caseTitle}>Modern Networking</h3>
              <p className={styles.caseText}>
                Stand out with smart business cards that instantly save your contact info to a lead's phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Innovate?</h2>
        <Button href="/contact" variant="primary">Request a Consultation</Button>
      </section>

      <Footer />
    </main>
  );
}

