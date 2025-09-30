import { INavLink } from '@/types/common';
import PagePaths from './page-paths';

const navLinks: INavLink[] = [
  { title: 'home', href: PagePaths.root },
  { title: 'about', href: PagePaths.about },
];

export default navLinks;
