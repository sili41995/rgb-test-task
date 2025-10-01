import React, { FC } from 'react';
import Container from '@/components/common/container';
import PostsListSkeleton from '@/components/posts/posts-list-skeleton';

const Loading: FC = () => {
  return (
    <Container>
      <PostsListSkeleton />
    </Container>
  );
};

export default Loading;
