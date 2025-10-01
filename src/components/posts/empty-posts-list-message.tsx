import { FC } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PagePaths from '@/constants/page-paths';

const EmptyPostsListMessage: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>List is empty</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className='w-[30ch] whitespace-nowrap overflow-hidden text-ellipsis'>
          Нou can add a new post
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={PagePaths.add}
          className='shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gray-600 text-white hover:bg-gray-600/80 h-9 px-4 py-2'
        >
          Add post
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EmptyPostsListMessage;
