import Container from '@/components/common/container';
import PostsListItemSkeleton from '@/components/posts/posts-list-item-skeleton';
import React, { FC } from 'react';

const Loading: FC = () => {
  return (
    <Container>
      <PostsListItemSkeleton />
    </Container>
  );
};

export default Loading;
