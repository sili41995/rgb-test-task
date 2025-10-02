import { FC, PropsWithChildren } from 'react';
import PageTitle from '@/components/common/page-title';
import Container from '@/components/common/container';
import EditLink from '@/components/posts/edit-link';

const PostDetailsPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section>
      <Container>
        <div className='relative space-y-3'>
          <EditLink />

          <PageTitle title='Post details' />
          {children}
        </div>
      </Container>
    </section>
  );
};

export default PostDetailsPageLayout;
