import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import styles from './Products.module.css';

export default function ProductsPage() {
  return (
    <main className={styles.container}>
      <Navbar />

      <header className={styles.header}>
        <h1 className={styles.title}>Our Smart Collection</h1>
        <p className={styles.subtitle}>
          Premium products embedded with cutting-edge NFC technology. Customizable to match your brand identity.
        </p>
      </header>

      {/* Bracelets Section */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Smart Bracelets</h2>
        <div className={styles.productGrid}>
          {/* Product 1 */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Silicone Wristband Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Event Pro Band</h3>
              <div className={styles.colorOptions}>
                <div className={styles.colorDot} style={{ background: '#00A1DE' }}></div>
                <div className={styles.colorDot} style={{ background: '#2D3436' }}></div>
                <div className={styles.colorDot} style={{ background: '#FF4D4D' }}></div>
              </div>
              <p className={styles.productDesc}>
                Durable silicone wristbands perfect for festivals, conferences, and access control. Waterproof and tear-resistant.
              </p>
              <div className={styles.features}>
                <span className={styles.featureTag}>Waterproof</span>
                <span className={styles.featureTag}>Custom Print</span>
              </div>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>

          {/* Product 2 */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Fabric Wristband Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Eco-Fabric Weaver</h3>
              <div className={styles.colorOptions}>
                <div className={styles.colorDot} style={{ background: '#8E9F6E' }}></div>
                <div className={styles.colorDot} style={{ background: '#F9A826' }}></div>
              </div>
              <p className={styles.productDesc}>
                Sustainable woven fabric bands with a bamboo slider. Ideal for eco-conscious brands and VIP events.
              </p>
              <div className={styles.features}>
                <span className={styles.featureTag}>Eco-Friendly</span>
                <span className={styles.featureTag}>Premium Feel</span>
              </div>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Intelligent Badges</h2>
        <div className={styles.productGrid}>
          {/* Product 3 */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>PVC Card Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Connect Card</h3>
              <p className={styles.productDesc}>
                The last business card you'll ever need. Tap to share contacts, portfolio, or social media instantly.
              </p>
              <div className={styles.features}>
                <span className={styles.featureTag}>PVC / Metal</span>
                <span className={styles.featureTag}>QR Code Backup</span>
              </div>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>

          {/* Product 4 */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Staff ID Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Secure Access ID</h3>
              <p className={styles.productDesc}>
                Employee ID badges that double as access keys and digital verification profiles.
              </p>
              <div className={styles.features}>
                <span className={styles.featureTag}>Secure Chip</span>
                <span className={styles.featureTag}>Photo ID</span>
              </div>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.header}>
        <h2 className={styles.title} style={{ fontSize: '2rem' }}>Need a Custom Solution?</h2>
        <p className={styles.subtitle} style={{ marginBottom: '30px' }}>
          We can embed NFC chips into almost any physical product. Let's talk about your idea.
        </p>
        <Button href="/contact">Request Custom Quote</Button>
      </section>

      <Footer />
    </main>
  );
}

