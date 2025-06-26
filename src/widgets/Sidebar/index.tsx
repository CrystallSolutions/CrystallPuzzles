'use client';

import { useState } from 'react';
import { useResize } from '@/shared/hooks';


export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScreenMd } = useResize();

  return (
    <div className="">

      <aside className="">
        {isScreenMd && (
          <button
            className=""
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {/* <Arrow className="" /> */}
          </button>
        )}
        {/* <Account user={user} className="" isMobile={isScreenMd} />
        <NavMenuList role={user.role} isMobile={isScreenMd} /> */}

        <div className="">
          <div className="">
            {/* <img src={exit} className="" />
            {!isScreenMd && <span>Выйти</span>} */}
          </div>
        </div>
      </aside>
    </div>
  );
};
