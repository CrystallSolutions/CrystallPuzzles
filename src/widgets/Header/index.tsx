'use client';
import Link from 'next/link';
import styles from './index.module.scss';
import Logo from '../../shared/assets/header/logo.svg';
import LogoTitle from '../../shared/assets/header/logo_title.svg';

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>
          <Logo className={styles.logo_icon} />
          <LogoTitle className={styles.logo_title} />
        </div>
      </Link>
    </div>
  );
}
