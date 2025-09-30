import PagePaths from '@/constants/page-paths';

export interface INavLink {
  href: PagePaths;
  title: string;
}

export interface ISendRequestProps {
  url: string;
  init?: RequestInit;
}
