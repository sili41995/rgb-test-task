import { FC } from 'react';
import { Metadata } from 'next';
import SectionTitle from '@/components/common/section-title';
import Container from '@/components/common/container';
import PageTitle from '@/components/common/page-title';
import AddPostForm from '@/components/posts/add-post-form';

export const metadata: Metadata = {
  title: 'Add post',
  description: 'Add new post page',
};

const PostDetailsPage: FC = async () => {
  return (
    <div className='space-y-3'>
      <PageTitle title='New post' />
      <section>
        <Container className='space-y-3'>
          <SectionTitle title='Add new post' />
          <AddPostForm />
        </Container>
      </section>
    </div>
  );
};

export default PostDetailsPage;
