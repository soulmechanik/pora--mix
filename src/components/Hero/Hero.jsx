import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src="/Vector-1.png" alt="Vector 1" className={styles.vector1} />
      <img src="/Vector-2.png" alt="Vector 2" className={styles.vector2} />
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
         
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              <span className={styles.pora}>
                P<span className={styles.o}>O</span>RA
              </span>
              -MiXER
            </h1>
            <div className={styles.yearBox}>
              <span className={styles.yearTop}>20</span>
              <span className={styles.yearBottom}>24</span>
            </div>
          </div>
         
         
          <div className={styles.buttons}>
            <a href="https://forms.gle/j9D2rXfxrFGNk6m66"target="_blank" rel="noopener noreferrer">
              <button className={styles.participateButton}>Sign Up</button>
            </a>
           
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