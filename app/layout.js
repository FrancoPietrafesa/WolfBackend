import './globals.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
});

export const metadata = {
  title: 'Wolf website',
  description: 'Wolf website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
