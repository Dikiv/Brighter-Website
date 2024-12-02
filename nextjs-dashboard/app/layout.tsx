import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import {Header} from '@/app/ui/dashboard/header'
import {Footer} from '@/app/ui/dashboard/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} text-xl text-gray-800 bg-zinc-900 md:text-3xl md:leading-normal`}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
