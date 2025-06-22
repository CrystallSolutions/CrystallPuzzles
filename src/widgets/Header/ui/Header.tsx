import Link from 'next/link';
import Image from 'next/image';
import { Title } from '@/shared/ui';
import logo from '@/assets/svg/logo.svg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Title tag="h1" className={styles.title}>
        Главная страница
      </Title>
      <Link href="/">
        <div className={styles.logo}>
          <Image alt="Логотип" src={logo} width={48} height={54} />
        </div>
      </Link>
    </header>
  );
};
