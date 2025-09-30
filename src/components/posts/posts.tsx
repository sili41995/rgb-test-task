'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/api/posts';
import PostsList from '@/components/posts/posts-list';
import PostsListSkeleton from '@/components/posts/posts-list-skeleton';
import { QueryKeys } from '@/constants';

const Posts: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.posts],
    queryFn: () => getPosts(),
    staleTime: 1 * 60 * 1000,
  });

  return isLoading ? <PostsListSkeleton /> : <PostsList posts={data?.data} />;
};

export default Posts;
