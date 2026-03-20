import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Portfolio",
  description: "Портфолио разработчика систем автоматизации",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}