import styles from './Flyers.module.scss';
import Link from 'next/link';

const Flyers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="https://forms.gle/zoqTY5q9mkFWoUEp6" target="_blank">
          <img src="/MIXER.png" alt="flyer" className={styles.image} />
        </Link>
      </div>
    </div>
  );
};

export default Flyers;