import { Provider } from '@/components/provider';
import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './global.css';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docs.odock.ai'),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} flex min-h-screen flex-col bg-background`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
