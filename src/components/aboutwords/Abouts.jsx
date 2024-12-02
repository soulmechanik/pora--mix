import styles from './Abouts.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>About Pora Mixer</h2>
      <p className={styles.description}>
        The Pora Mixer is a series of exclusive events hosted by <a href="https://poraintro.com" target="_blank" rel="noopener noreferrer"><span className={styles.intro}>Pora Intro</span></a>, designed for mature, eligible singles aged 25 and above.
      </p>
      <h3 className={styles.subTitle}>Our Mission</h3>
      <p className={styles.description}>
        Our mission is to create meaningful opportunities for connection through casual and curated meet-ups in cities worldwide,<br /> particularly for those with limited avenues to meet like-minded individuals.
      </p>
      <h3 className={styles.subTitle}>Eligibility</h3>
      <p className={styles.description}>
        Please note that eligibility for participation is determined at the discretion of the event organizers.
      </p>
      <h3 className={styles.subTitle}>Get Started!</h3>
      <p className={styles.hostedBy}>
        This event is hosted by <a href="https://poraintro.com" target="_blank" rel="noopener noreferrer"><span className={styles.intro}>Pora Intro</span></a>
      </p>
      <div className={styles.buttons}>
        <a href="https://forms.gle/iocr1qrzWHxZeFuo9" target="_blank" rel="noopener noreferrer">
          <button className={styles.signUpButton}>Sign up</button>
        </a>
      </div>
    </div>
  );
};

export default About;