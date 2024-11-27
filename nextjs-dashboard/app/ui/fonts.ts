import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { Oswald } from 'next/font/google';


export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
});
export const inter = Inter({ subsets: ['latin'] });

export const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '700'],
    
});