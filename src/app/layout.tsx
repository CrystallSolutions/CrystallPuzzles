import type { Metadata } from 'next';
import './globals.css';
import Header from '@/widgets/Header';
import { SessionProvider } from 'next-auth/react';
import { Footer } from '@/widgets/Footer';

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
          <div className="container flex flex-grow gap-4 relative p-2">
            {children}
          </div>
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
