import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_container}>
        <div className={styles.footer}>
          <div className={styles.box}>
            <h3 className={styles.logo2}>Pora Mix</h3>
            <span>Our team is dedicated to fostering connections and creating a community that brings people together..</span>
            <span>Email: getpora@gmail.com</span>
            <span>Phone: +1 234 567 890</span>
          </div>

          <div className={styles.box}>
            <h3>Quick Links</h3>
            <span>Home</span>
            <span>About</span>
            <span>Speakers</span>
            <span>Tickets</span>
            <span>Contact</span>
          </div>

          <div className={styles.box}>
            <h3>Follow-Us</h3>
            <span>Twitter</span>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
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