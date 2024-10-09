import type {Metadata} from 'next';
import './globals.css';
import {Space_Grotesk} from 'next/font/google';
import Navbar from '@components/navbar/Navbar';
import GlobalProvider from '@providers/GlobalProvider';
import UserProvider from '@providers/UserProvider';

// load font
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

// page metadata
export const metadata: Metadata = {
  title: 'QuizzTure',
  description: 'Le quizz de culture générale avec tes amis',
};

/**
 * Main layout
 *
 * @param {ReactNode} children : the children components of the layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={`${spaceGrotesk.className}`}>
        <GlobalProvider>
          <UserProvider>
            <Navbar />
            {children}
          </UserProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
