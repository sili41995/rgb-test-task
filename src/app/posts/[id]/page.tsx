import { FC } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getPostById } from '@/api/posts';
import { IPost } from '@/api/types/posts';
import { QueryKeys } from '@/constants';
import { getQueryClient } from '@/utils';
import SectionTitle from '@/components/common/section-title';
import Container from '@/components/common/container';
import Text from '@/components/common/text';

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
    queryFn: () => getPostById({ id, init: { cache: 'no-store' } }),
    staleTime: 1 * 10 * 1000,
  });

  const post = queryClient.getQueryData([QueryKeys.posts, id]) as IPost;

  if (!post) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <section>
      <Container className='space-y-3'>
        <HydrationBoundary state={dehydratedState}>
          <SectionTitle title={post.title} />
          <Text text={post.text} />
        </HydrationBoundary>
      </Container>
    </section>
  );
};

export default PostDetailsPage;
