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
type LayoutProps = {
  children: string;
};
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
