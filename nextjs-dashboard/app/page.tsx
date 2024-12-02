import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import {Header} from '@/app/ui/dashboard/header'
import {Greeter} from '@/app/ui/dashboard/greeter'
import {Footer} from '@/app/ui/dashboard/footer'


export default function Page() {
  return (
    
    <main className="flex min-h-screen flex-col ">
      
      <div className="flex grow p-8">
        <Greeter/>
      </div>

    </main>
  );
}
