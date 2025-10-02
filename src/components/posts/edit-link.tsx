'use client';

import { FC, MouseEvent } from 'react';
import { Edit2Icon } from 'lucide-react';
import Link from 'next/link';
import PagePaths from '@/constants/page-paths';
import { usePathname, useRouter } from 'next/navigation';

const EditBtn: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isEditPage = pathname.includes(PagePaths.edit);
  const href = `${pathname}/${PagePaths.edit}`;

  const onLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();

    if (!isEditPage) return;
    e.preventDefault();

    const goBackPath = pathname
      .split('/')
      .filter((string) => string !== PagePaths.edit)
      .join('/');

    router.push(goBackPath);
  };

  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="absolute top-0 right-0 size-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30"
    >
      <Edit2Icon />
    </Link>
  );
};

export default EditBtn;
