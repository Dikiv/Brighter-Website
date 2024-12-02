'use client';

import {
  HomeIcon,
  DocumentDuplicateIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Works',
    href: '/works',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Reviews', href: '/reviews', icon: CheckCircleIcon },
  { name: 'About', href: '/about', icon: QuestionMarkCircleIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex space-x-6">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center space-x-2 px-4 py-2  transition-all',
              {
                'text-gray-900 bg-yellow-300': isActive, // Highlight 
                'text-yellow-300 hover:text-yellow-500': !isActive, // Default 
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
