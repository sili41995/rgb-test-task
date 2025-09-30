import { FC } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getPosts } from '@/api/posts';
import { getQueryClient } from '@/utils';
import { QueryKeys } from '@/constants';
import Posts from '@/components/posts/posts';
import Container from '@/components/common/container';
import PageTitle from '@/components/common/page-title';
import SectionTitle from '@/components/common/section-title';

const Home: FC = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.posts],
    queryFn: () => getPosts({ cache: 'no-store' }),
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className='space-y-3'>
      <PageTitle title='Home' />
      <section>
        <Container className='space-y-3'>
          <SectionTitle title='Posts' />
          <HydrationBoundary state={dehydratedState}>
            <Posts />
          </HydrationBoundary>
        </Container>
      </section>
    </div>
  );
};

export default Home;
