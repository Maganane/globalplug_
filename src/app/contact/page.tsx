'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import styles from './Contact.module.css';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! This is a demo form. In a real app, this would send your request to our CRM.");
  };

  return (
    <main className={styles.container}>
      <Navbar />

      <header className={styles.header}>
        <h1 className={styles.title}>Get a Quote</h1>
        <p className={styles.subtitle}>
          Ready to transform your brand? Fill out the form below or book a direct consultation with our sales team.
        </p>
      </header>

      <div className={styles.contentWrapper}>
        {/* Contact Form */}
        <section className={styles.formSection}>
          <h2 className={styles.formTitle}>Project Details</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>Company/Organization</label>
              <input type="text" id="company" className={styles.input} required placeholder="Global Plug Ltd" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Contact Name</label>
              <input type="text" id="name" className={styles.input} required placeholder="Jean Doe" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" className={styles.input} required placeholder="jean@company.rw" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="product" className={styles.label}>Product Interest</label>
              <select id="product" className={styles.select}>
                <option value="bracelets">Smart Bracelets</option>
                <option value="badges">Smart Badges/Cards</option>
                <option value="journals">Smart Journals</option>
                <option value="custom">Custom Solution</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="quantity" className={styles.label}>Estimated Quantity</label>
              <input type="number" id="quantity" className={styles.input} placeholder="e.g. 500" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Additional Details / Timeline</label>
              <textarea id="message" className={styles.textarea} placeholder="Tell us about your event date or specific requirements..."></textarea>
            </div>

            <Button className="w-full">Submit Request</Button>
          </form>
        </section>

        {/* Sidebar Info */}
        <aside className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Fast-Track Your Order</h3>
            <p className={styles.infoText}>
              Need to speak to someone right now? Book a 15-minute discovery call with our product specialist.
            </p>
            <a href="#" className={styles.calendlyWidget}>?? Book a Call via Calendly</a>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Visit Our Office</h3>
            <p className={styles.infoText}>
              <strong>Global Plug HQ</strong><br />
              Kigali Heights, Floor 3<br />
              KG 7 Ave, Kigali
            </p>
            <p className={styles.infoText}>
              <strong>Hours:</strong><br />
              Mon - Fri: 8am - 5pm
            </p>
            <p className={styles.infoText}>
              <strong>Email:</strong><br />
              hello@globalplug.rw
            </p>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}

