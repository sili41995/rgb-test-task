import { FC } from 'react';
import PostsListItemSkeleton from '@/components/posts/posts-list-item-skeleton';

const PostsListSkeleton: FC = () => {
  return (
    <ul>
      {[{}, {}, {}].map((_, index) => (
        <li key={index}>
          <PostsListItemSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default PostsListSkeleton;
