import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Разработка ботов, автоматизации и AI-решений",
  description:
    "Разработка Telegram-ботов, ботов в Max, парсеров, систем приема заявок, CRM-интеграций и AI-автоматизации для бизнеса.",
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