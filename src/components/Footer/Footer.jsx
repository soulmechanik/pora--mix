import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_container}>
        <div className={styles.footer}>
          <div className={styles.box}>
            <h3 className={styles.logo2}>Pora Mix</h3>
            <span>Our team is dedicated to fostering connections and creating a community that brings people together..</span>
            <span>Email: getpora@gmail.com</span>
            <span>Phone: +2348033061107  </span>
          </div>

          <div className={styles.box}>
            <h3>Quick Links</h3>
            <ul className={styles.list}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/Event">Event</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.box}>
            <h3>Follow Us</h3>
            <ul className={styles.list}>
              <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
              <li><Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
              <li><Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
              <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
            </ul>
          </div>

          <div className={styles.box}>
            <h3>Address</h3>
            <span>2 Akinyemi Avenue, Elf lekki <br />(opposite Grand Emperor Hotel)</span>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;