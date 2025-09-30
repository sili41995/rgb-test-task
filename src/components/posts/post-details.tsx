import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

interface IPostDetailsProps {
  text: string;
  title: string;
  detailsPath: string;
}

const PostDetails: FC<IPostDetailsProps> = ({ text, title, detailsPath }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className='w-[30ch] whitespace-nowrap overflow-hidden text-ellipsis'>
          {text}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={detailsPath}
          className='shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gray-600 text-white hover:bg-gray-600/80 h-9 px-4 py-2'
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PostDetails;
