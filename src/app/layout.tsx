import type { Metadata } from 'next';
import './globals.css';
import Header from '@/widgets/Header';
import { SessionProvider } from 'next-auth/react';
import { Footer } from '@/widgets/Footer';
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
    <html lang="ru">
      <SessionProvider>
        <body className="min-h-screen flex flex-col bg-gradient-light">
          <Header />
          <div className="flex flex-grow max-w">
            <main className="container">{children}</main>
            <Sidebar />
          </div>
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
