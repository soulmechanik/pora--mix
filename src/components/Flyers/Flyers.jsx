import styles from './Flyers.module.scss';

const Flyers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src="/MIXER.png" alt="flyer" className={styles.image} />
      </div>
    </div>
  );
};

export default Flyers;