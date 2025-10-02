import { FC } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getPosts } from '@/api/posts';
import { getQueryClient } from '@/utils';
import { QueryKeys } from '@/constants';
import Posts from '@/components/posts/posts';
import Container from '@/components/common/container';
import SectionTitle from '@/components/common/section-title';

interface IHomePageProps {
  searchParams: Promise<{ page?: string }>;
}

const HomePage: FC<IHomePageProps> = async ({ searchParams }) => {
  const queryClient = getQueryClient();
  const { page } = await searchParams;

  const pageNumber = Number(page ?? 1);

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.posts, pageNumber],
    queryFn: () =>
      getPosts({
        page: pageNumber,
        init: {
          cache: 'no-store',
        },
      }),
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  const state = queryClient.getQueryState([QueryKeys.posts, page]);
  if (state?.error) {
    throw state.error;
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <section>
      <Container className='space-y-3'>
        <SectionTitle title='Posts' />
        <HydrationBoundary state={dehydratedState}>
          <Posts page={pageNumber} />
        </HydrationBoundary>
      </Container>
    </section>
  );
};

export default HomePage;
