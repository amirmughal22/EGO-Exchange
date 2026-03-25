import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Ego Exchange',
  description: 'Pro cross-chain trading terminal on Lithosphere',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
