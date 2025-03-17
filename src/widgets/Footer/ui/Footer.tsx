import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/svg/logo.svg';
import vk from '@/assets/svg/vk.svg';
import telegram from '@/assets/svg/telegram.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://crystalpuzzles.ru/" target="_blank" rel="noreferrer">
        <Image alt="" src={logo} width={48} height={54} />
      </Link>
      <div className={styles.socials}>
        <Link
          href="https://t.me/crystallpuzzless"
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="" src={telegram} width={40} height={40} />
        </Link>
        <Link
          href="https://vk.com/crystalpuzzlesfs"
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="" src={vk} width={40} height={40} />
        </Link>
      </div>
    </footer>
  );
};
