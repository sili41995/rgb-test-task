import { FC } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getPosts } from '@/api/posts';
import { getQueryClient } from '@/utils';
import { QueryKeys } from '@/constants';
import Posts from '@/components/posts/posts';
import Container from '@/components/common/container';
import SectionTitle from '@/components/common/section-title';

const HomePage: FC = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.posts],
    queryFn: () => getPosts({ cache: 'no-store' }),
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <section>
      <Container className='space-y-3'>
        <SectionTitle title='Posts' />
        <HydrationBoundary state={dehydratedState}>
          <Posts />
        </HydrationBoundary>
      </Container>
    </section>
  );
};

export default HomePage;
