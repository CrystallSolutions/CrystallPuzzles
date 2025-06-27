'use client';

import { useSwipe } from '@/shared';
import { ChevronDown, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface SidebarProps {
  routes: {
    name: string;
    path: string;
  }[];
  className?: string;
}
const defaultStyle =
  'flex flex-col gap-4 p-2 bg-light md:bg-transparent absolute top-0 left-0 bottom-0 transition-all transform -translate-x-full w-3/4 sm:w-1/2';

const mdStyle =
  'md:bg-transparent md:translate-x-0 md:top-auto md:left-auto md:bottom-auto md:static md:w-1/3';

export function Sidebar({ routes, className }: SidebarProps) {
  const [open, setOpen] = useState(false); // menu
  const [active, setActive] = useState(false); // sidebar itself

  const pathname = usePathname();
  useSwipe(
    typeof document !== 'undefined' ? document : undefined,
    (e: boolean) => {
      setActive(e);
    },
    [],
  );
  return (
    <aside
      className={
        `${defaultStyle} ${mdStyle} ${active && 'translate-x-0'} lg:w-1/5` +
        ' ' +
        className
      }
    >
      <div className="flex gap-2">
        <img
          src="https://placehold.co/50x50"
          alt=""
          className="aspect-square rounded-full"
        />
        <div className="flex flex-col">
          <span>Role</span>
          <span>Name</span>
        </div>
      </div>

      <nav className="after_underline before_underline after:mt-2 before:mb-2">
        <div
          className="link px-2 flex items-center justify-between "
          onClick={() => setOpen((prev) => !prev)}
        >
          {routes.find((r) => r.path === pathname)?.name}
          <ChevronDown className={`duration-300 ${open ? 'rotate-180' : ''}`} />
        </div>
        <ul
          className={`flex flex-col px-4 user-select-none overflow-hidden ${
            open ? 'h-fit' : 'h-0'
          }`}
        >
          {routes
            .filter((r) => r.path !== pathname)
            .map(({ name, path }) => (
              <li key={path} className="link">
                <Link href={path}>{name}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <div
        className="link px-2 flex gap-2 items-center"
        onClick={() => {
          signOut();
        }}
      >
        <LogOut />
        Выйти
      </div>
    </aside>
  );
}
