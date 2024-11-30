import styles from './Abouts.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>About Pora Mixer</h2>
      <p className={styles.description}>
        The Pora Mixer is a series of exclusive events hosted by Pora Intro, designed for mature, eligible singles aged 25 and above.
      </p>
      <h3 className={styles.subTitle}>Our Mission</h3>
      <p className={styles.description}>
        Our mission is to create meaningful opportunities for connection through casual and curated meet-ups in cities worldwide, particularly for those with limited avenues to meet like-minded individuals.
      </p>
      <h3 className={styles.subTitle}>Eligibility</h3>
      <p className={styles.description}>
        Please note that eligibility for participation is determined at the discretion of the event organizers.
      </p>
      <h3 className={styles.subTitle}>Get Started!</h3>
      <button className={styles.signUpButton}>Sign up today!</button>
    </div>
  );
};

export default About;