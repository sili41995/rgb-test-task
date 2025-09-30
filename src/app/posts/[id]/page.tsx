import { FC } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getPost } from '@/api/posts';
import { IPost } from '@/api/types/posts';
import { QueryKeys } from '@/constants';
import { getQueryClient } from '@/utils';

export const metadata: Metadata = {
  title: 'Details',
  description: 'Post details',
};

interface IPostDetailsPageProps {
  params: Promise<{ id: string }>;
}

const PostDetailsPage: FC<IPostDetailsPageProps> = async ({ params }) => {
  const { id } = await params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.posts, id],
    queryFn: () => getPost(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const post = queryClient.getQueryData([QueryKeys.posts, id]) as IPost;

  if (!post) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      {/* <div className='space-y-3'>
        <PageTitle />
        <section className='space-y-3'>
          <SectionTitle />
          <Container>
            <HydrationBoundary state={dehydratedState}>
              <Posts />
            </HydrationBoundary>
          </Container>
        </section>
      </div> */}
    </HydrationBoundary>
  );
};

export default PostDetailsPage;
