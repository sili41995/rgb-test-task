import { FC } from 'react';
import UpdatePostForm from '@/components/posts/update-post-form';
import { getQueryClient } from '@/utils';
import { QueryKeys } from '@/constants';
import { IPost } from '@/api/types/posts';
import { notFound } from 'next/navigation';
import { getPostById } from '@/api/posts';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

interface IPostEditPageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<IPostEditPageProps> = async ({ params }) => {
  const { id } = await params;

  const queryClient = getQueryClient();
  const itemKey = [QueryKeys.posts, id];

  await queryClient.prefetchQuery({
    queryKey: itemKey,
    queryFn: () => getPostById({ id, init: { cache: 'no-store' } }),
    staleTime: 1 * 10 * 1000,
  });

  const post = queryClient.getQueryData(itemKey) as IPost;

  if (!post) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <UpdatePostForm
        id={id}
        text={post.text}
        title={post.title}
      />
    </HydrationBoundary>
  );
};

export default Page;
