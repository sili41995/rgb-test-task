import React, { FC } from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { INavLink } from '@/types/common';

interface IHeaderProps {
  navLinks: INavLink[];
}

const Header: FC<IHeaderProps> = ({ navLinks }) => {
  return (
    <header className='flex justify-center py-4'>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {navLinks.map(({ href, title }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href={href}
                  className='capitalize'
                >
                  {title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
