import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import {Header} from '@/app/ui/dashboard/header'
import {Footer} from '@/app/ui/dashboard/footer'
import { oswald } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${oswald.className} text-xl text-yellow-300 bg-zinc-900 md:text-3xl md:leading-normal`}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
