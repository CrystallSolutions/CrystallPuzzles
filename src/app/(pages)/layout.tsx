import type { Metadata } from 'next';
import { Sidebar } from '@/widgets/Sidebar';

export const metadata: Metadata = {
  title: 'Crystal Puzzles',
  description:
    'Приложение для составления расписания для тренеров, создание плана занятий для учеников и для отслеживания статистики',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar
        routes={[
          { name: 'Главная', path: '/' },
          { name: 'Профиль', path: '/profile' },
          { name: 'Настройки', path: '/settings' },
          { name: 'Выход', path: '/logout' },
          { name: 'Помощь', path: '/help' },
        ]}
      />
      <main className="">{children}</main>
    </>
  );
}
