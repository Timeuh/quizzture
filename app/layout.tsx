import type {Metadata} from 'next';
import './globals.css';
import {Space_Grotesk} from 'next/font/google';
import Navbar from '@components/navbar/Navbar';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'QuizzTure',
  description: 'Le quizz de culture générale avec tes amis',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={`${spaceGrotesk.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
