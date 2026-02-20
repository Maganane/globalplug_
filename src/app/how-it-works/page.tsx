import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import styles from './HowItWorks.module.css';

export default function HowItWorksPage() {
  return (
    <main className={styles.container}>
      <Navbar />

      <header className={styles.header}>
        <h1 className={styles.title}>From Physical to Digital</h1>
        <p className={styles.subtitle}>
          We've simplified the process of bringing your brand into the connected era. No apps, no batteries, just smart engagement.
        </p>
      </header>

      {/* Process Steps */}
      <section className={styles.processSection}>
        {/* Step 1 */}
        <div className={styles.step}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Order & Design</h3>
            <p className={styles.stepText}>
              Choose your product (wristband, card, etc.) and submit your branding assets. We create a mock-up for your approval.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className={styles.step}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Design & Configure</h3>
            <p className={styles.stepText}>
              You choose: design the products yourself or let our team handle it. Configure your links securely on our dashboard, or we can set them up for you.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className={styles.step}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Production & Delivery</h3>
            <p className={styles.stepText}>
              We manufacture your smart products here in Rwanda and deliver them ready to use. Hand them out and watch the engagement grow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

          <div className={styles.faqItem}>
            <div className={styles.question}>Do users need an app to scan?</div>
            <div className={styles.answer}>
              No. Modern smartphones (iPhone XS+ and most Androids) have background NFC reading capabilities. They just need to tap the product.
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.question}>Do the products need batteries?</div>
            <div className={styles.answer}>
              No. The NFC chips are passive; they are powered briefly by the magnetic field of the phone scanning them. They never need charging.
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.question}>Can I change the link later?</div>
            <div className={styles.answer}>
              Yes! We offer a dynamic link service where we can redirect the target URL without you needing to recall or reprint the physical products.
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.question}>What is the minimum order quantity?</div>
            <div className={styles.answer}>
              For custom branded items, our MOQ starts at 50 units. For unbranded or sample kits, you can order as few as 1.
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ marginBottom: '20px' }}>Still have questions?</p>
            <Button href="/contact" variant="secondary">Contact Support</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

