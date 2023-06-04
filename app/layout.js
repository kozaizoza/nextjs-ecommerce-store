import './globals.scss';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home Page | The Blossom Collective',
    template: '%s | The Blossom Collective',
  },
  description:
    'We believe in transforming the art of floral design into a captivating experience that goes beyond traditional bouquets.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
