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
          <div className={styles.caseImage}>
            <img src="/images/cases/mwc-kigali.jpg" alt="MWC Kigali 2025" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className={styles.caseContent}>
            <span className={styles.clientName}>GSMA & MWC Kigali 2025</span>
            <h2 className={styles.caseTitle}>Fast-Tracking Africa's Digital Transformation</h2>

            <div className={styles.caseDetails}>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>The Challenge:</span>
                <p className={styles.detailText}>
                  "Policy Reform Key to Fast-Tracking Africa’s Digital Transformation." With thousands of delegates and policymakers, seamless information sharing and networking is critical to driving the agenda forward efficiently.
                </p>
              </div>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>Global Plug Solution:</span>
                <p className={styles.detailText}>
                  NFC-enabled smart badges that allow delegates to instantly exchange contact info and access key policy documents with a single tap, eliminating friction and fostering real-time collaboration.
                </p>
              </div>
            </div>

            <div className={styles.results}>
              <span className={styles.detailLabel}>Potential Impact:</span>
              <p className={styles.detailText}>Streamlined access for attendees and enhanced high-level policy connections without the need for physical business cards or flyers.</p>
            </div>
          </div>
        </article>

        {/* Case Study 2 */}
        <article className={styles.caseStudy}>
          <div className={styles.caseImage}>
            <img src="/images/cases/bk-campaign.jpg" alt="Bank of Kigali Campaign" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className={styles.caseContent}>
            <span className={styles.clientName}>Bank of Kigali (Campaign)</span>
            <h2 className={styles.caseTitle}>Modernizing Corporate Gifts</h2>

            <div className={styles.caseDetails}>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>The Challenge:</span>
                <p className={styles.detailText}>Traditional year-end diaries were seen as "generic" and lacked digital conversion tracking, failing to engage the modern, tech-savvy banking client.</p>
              </div>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>Global Plug Solution:</span>
                <p className={styles.detailText}>
                  Premium leather journals embedded with NFC chips that link directly to a personalized video message from the CEO or a digital financial report, turning a static gift into an active communication channel.
                </p>
              </div>
            </div>

            <div className={styles.results}>
              <span className={styles.detailLabel}>Potential Impact:</span>
              <p className={styles.detailText}>Significant increase in client engagement (scan-to-gift ratio) and real-time data on campaign effectiveness.</p>
            </div>
          </div>
        </article>

        {/* Case Study 3 */}
        <article className={styles.caseStudy}>
          <div className={styles.caseImage}>
            <img src="/images/cases/youth-connekt.jpg" alt="YouthConnekt Africa 2023" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className={styles.caseContent}>
            <span className={styles.clientName}>YouthConnekt Africa 2023</span>
            <h2 className={styles.caseTitle}>Connecting Africa's Youth</h2>

            <div className={styles.caseDetails}>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>The Challenge:</span>
                <p className={styles.detailText}>
                  Connecting thousands of young innovators and leaders across the continent in a meaningful way, where exchanging physical contacts is slow, inefficient, and often leads to lost connections.
                </p>
              </div>
              <div className={styles.detailSection}>
                <span className={styles.detailLabel}>Global Plug Solution:</span>
                <p className={styles.detailText}>
                  Smart wristbands or biodegradable eco-badges that allow attendees to tap-and-connect, instantly sharing portfolios, project links, and social profiles to foster long-term cross-border collaboration.
                </p>
              </div>
            </div>

            <div className={styles.results}>
              <span className={styles.detailLabel}>Potential Impact:</span>
              <p className={styles.detailText}>Facilitating thousands of digital connections per hour and creating a lasting digital ecosystem for Africa's youth leaders.</p>
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

