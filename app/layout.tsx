import type {Metadata} from 'next';
import './globals.css';
import {Space_Grotesk} from 'next/font/google';
import Navbar from '@components/navbar/Navbar';
import GlobalProvider from '@providers/GlobalProvider';

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
        <GlobalProvider>
          <Navbar />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
