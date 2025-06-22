import type { Metadata } from 'next';
import './styles/globals.scss';
import { Layout, LayoutHeader, LayoutMain } from '@/shared/components/Layout';
import Header from '@/widgets/Header';
import style from './lauout.module.scss';
import { SessionProvider } from 'next-auth/react';

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
    <html lang="ru">
      <SessionProvider>
        <Layout>
          <LayoutHeader>
            <Header />
          </LayoutHeader>
          <LayoutMain className={style.main}>{children}</LayoutMain>
        </Layout>
      </SessionProvider>
    </html>
  );
}
