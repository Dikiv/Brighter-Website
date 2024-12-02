'use client';


import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Works',
    href: '/works',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Reviews', href: '/reviews', icon: UserGroupIcon },
  { name: 'About', href: '/about', icon: QuestionMarkCircleIcon },

];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
     <div className="flex space-x-6">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'text-yellow-300 hover:text-yellow-500',
              {
                'px-4 py-2 text-yellow-300 hover:text-yellow-500': pathname === link.href,
              },
            )}
            
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      </div>
    </>
  );
}
