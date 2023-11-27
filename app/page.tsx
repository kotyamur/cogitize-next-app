import Image from 'next/image'
import styles from './page.module.scss'

export default function Positions() {
  return (
    <main>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
