import type {Metadata} from "next";
import {Roboto, Rubik} from "next/font/google";
import "./styles/globals.scss";

const roboto = Roboto({
  variable: "--ff-first",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const rubik = Rubik({
  variable: "--ff-second",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Crystal Puzzles",
  description:
    "Приложение для составления расписания для тренеров, создание плана занятий для учеников и для отслеживания статистики",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${roboto.variable} ${rubik.variable}`}>{children}</body>
    </html>
  );
}
