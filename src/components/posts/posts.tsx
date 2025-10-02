'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/api/posts';
import PostsList from '@/components/posts/posts-list';
import PostsListSkeleton from '@/components/posts/posts-list-skeleton';
import { QueryKeys } from '@/constants';
import PaginationBar from '@/components/common/pagination-bar';

interface IPostsProps {
  page: number;
}

const Posts: FC<IPostsProps> = ({ page }) => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.posts, page],
    queryFn: () =>
      getPosts({
        page,
        init: {
          cache: 'no-store',
        },
      }),
    staleTime: 1 * 60 * 1000,
  });

  const totalPages = data ? Math.ceil(data.filteredCount / 2) : 1;
  const showPaginationBar = totalPages > 1;

  return (
    <div className='space-y-3'>
      {isLoading ? <PostsListSkeleton /> : <PostsList posts={data?.data} />}
      {showPaginationBar && (
        <PaginationBar
          totalPages={totalPages}
          currentPage={page}
        />
      )}
    </div>
  );
};

export default Posts;
