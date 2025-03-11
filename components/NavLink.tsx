'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative group">
      <span
        className={cn(
          'transition-colors duration-300',
          isActive ? 'text-primary font-normal' : 'text-muted-foreground group-hover:text-primary'
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          'absolute left-1/2 -bottom-1.5 h-1 w-1 rounded-full bg-primary transition-opacity duration-300 transform -translate-x-1/2',
          isActive ? 'opacity-100' : 'opacity-0'
        )}
      />
    </Link>
  );
};

export default NavLink;
