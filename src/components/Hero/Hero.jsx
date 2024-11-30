import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src="/Vector-1.png" alt="Vector 1" className={styles.vector1} />
      <img src="/Vector-2.png" alt="Vector 2" className={styles.vector2} />
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <p className={styles.date}>02-04 MARCH. 2024</p>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              <span className={styles.pora}>
                P<span className={styles.o}>O</span>RA
              </span>
              -MiX
            </h1>
            <div className={styles.yearBox}>
              <span className={styles.yearTop}>20</span>
              <span className={styles.yearBottom}>24</span>
            </div>
          </div>
          <h1 className={styles.conferenceTitle}>GET TOGETHER </h1>
          <p className={styles.description}>
          Our team is dedicated to fostering connections and creating a community that brings people together..
          </p>
          <div className={styles.buttons}>
            <a href="https://forms.gle/iocr1qrzWHxZeFuo9" target="_blank" rel="noopener noreferrer">
              <button className={styles.participateButton}>Register Now</button>
            </a>
            <button className={styles.watchButton}>
              <span>Watch the Teaser</span>
            
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="heroImage.jpg" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;