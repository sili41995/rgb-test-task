import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import ThemeProvider from '@/providers/theme-provider';
import Header from '@/components/common/header';
import { navLinks } from '@/constants';

import '@/styles/globals.css';
import QueryProvider from '@/providers/query-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Home',
  description: 'Posts app',
};

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={['antialiased', geistSans.variable].join(' ')}>
        <QueryProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <Header navLinks={navLinks} />
            <main>{children}</main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
