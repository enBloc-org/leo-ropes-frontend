import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export const metadata: Metadata = {
  title: 'Leo Ropes Ltd.',
  description:
    'Covered ropes for aerial circus in a dazzling array of colours.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='flex h-[100vh] flex-col'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
