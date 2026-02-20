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

      {/* Wearables Section */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Wearables</h2>
        <div className={styles.productGrid}>
          {/* Smart Wristbands */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Smart Wristband Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Smart Wristbands</h3>
              <div className={styles.colorOptions}>
                <div className={styles.colorDot} style={{ background: '#00A1DE' }}></div>
                <div className={styles.colorDot} style={{ background: '#2D3436' }}></div>
                <div className={styles.colorDot} style={{ background: '#FF4D4D' }}></div>
              </div>
              <p className={styles.productDesc}>
                Durable silicone wristbands for festivals, conferences, and access control. Waterproof and tear-resistant.
              </p>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>

          {/* Smart Bracelets */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Smart Bracelet Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Smart Bracelets</h3>
              <div className={styles.colorOptions}>
                <div className={styles.colorDot} style={{ background: '#8E9F6E' }}></div>
                <div className={styles.colorDot} style={{ background: '#F9A826' }}></div>
              </div>
              <p className={styles.productDesc}>
                Sustainable woven fabric bands with a bamboo slider. Ideal for eco-conscious brands and VIP events.
              </p>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards & Badges Section */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Cards & Badges</h2>
        <div className={styles.productGrid}>
          {/* Smart Business Cards */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Smart Business Card Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Smart Business Cards</h3>
              <p className={styles.productDesc}>
                The last business card you'll ever need. Tap to share contacts, portfolio, or social media instantly.
              </p>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>

          {/* Smart Badges */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Smart Badge Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Smart Badges</h3>
              <p className={styles.productDesc}>
                Employee ID badges that double as access keys and digital verification profiles.
              </p>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Marketing Section */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Office & Marketing</h2>
        <div className={styles.productGrid}>
          {/* Smart Notebooks */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Smart Notebook Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Smart Notebooks</h3>
              <p className={styles.productDesc}>
                Premium journals with embedded NFC to link to digital notes, cloud storage, or company portals.
              </p>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>

          {/* Smart Pens */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Smart Pen Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Smart Pens</h3>
              <p className={styles.productDesc}>
                High-quality writing instruments with a digital twist. Tap to share your info over a handshake.
              </p>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>

          {/* Smart Magnetic Tags */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Smart Tag Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Smart Magnetic Tags</h3>
              <p className={styles.productDesc}>
                Versatile tags for inventory tracking, asset management, or interactive displays.
              </p>
              <Button variant="outline" className="w-full mt-4">Configure</Button>
            </div>
          </div>

          {/* Smart Posters */}
          <div className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Smart Poster Image</div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>Smart Posters</h3>
              <p className={styles.productDesc}>
                Interactive marketing posters. Tap to watch trailers, get coupons, or view event details.
              </p>
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

