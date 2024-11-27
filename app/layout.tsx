import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Josefin_Sans } from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const josefinSans = Josefin_Sans({
    variable: "--font-josefin-sans",
   subsets: ["latin"] 
  });

export const metadata: Metadata = {
  title: "TaskMaster - Plataforma de Gestão de Tarefas",
  description: "Gerencie suas tarefas e aumente sua produtividade com o TaskMaster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${josefinSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
