import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

import '@/styles/main.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col">
        <Header />
        <main className="grow shrink-0 basis-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
