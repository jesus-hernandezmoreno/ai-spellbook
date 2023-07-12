import '@styles/globals.css';

import { Nav, Provider } from '@components';

export const metadata = {
  title: 'AI spellbook',
  description: 'Discover & Share AI Prompts'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className="relative">
      <Provider>
        <main className="app flex relative z-10 items-center flex-col max-w-7xl mx-auto sm:px-16 px-6 w-screen h-screen max-sm:p-4">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
