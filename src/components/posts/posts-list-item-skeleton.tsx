import { FC } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const PostsListItemSkeleton: FC = () => {
  return (
    <div className='space-y-2'>
      <Skeleton className='h-4 w-[250px] bg-gray-800' />
      <Skeleton className='h-4 w-[200px] bg-gray-700' />
    </div>
  );
};

export default PostsListItemSkeleton;
