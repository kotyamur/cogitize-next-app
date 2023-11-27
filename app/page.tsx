// import Image from 'next/image'
import { PositionsList } from '@/components/PositionsList/PositionsList';
import styles from './page.module.scss'
import { DutiesForm } from '@/components/DutiesForm/DutiesForm';

export default function Positions() {
  return (
    <main className={styles.main}>
      <PositionsList />
      <DutiesForm />
      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
    </main>
  );
}
