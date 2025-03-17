'use client';

import { useState } from 'react';
import { useResize } from '@/shared/hooks';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScreenMd } = useResize();

  return (
    <div className={styles.wrapper}>

      <aside className={isOpen ? styles.sidebar_open : styles.sidebar}>
        {isScreenMd && (
          <button
            className={isOpen ? styles.arrow_close : styles.arrow_open}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {/* <Arrow className={styles.arrow_svg} /> */}
          </button>
        )}
        {/* <Account user={user} className={styles.account} isMobile={isScreenMd} />
        <NavMenuList role={user.role} isMobile={isScreenMd} /> */}

        <div className={styles.links}>
          <div className={`${styles.sidebar_btn} ${styles.exit}`}>
            {/* <img src={exit} className={styles.link_icon} />
            {!isScreenMd && <span>Выйти</span>} */}
          </div>
        </div>
      </aside>
    </div>
  );
};
