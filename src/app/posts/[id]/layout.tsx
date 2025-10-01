import { FC, PropsWithChildren } from 'react';
import PageTitle from '@/components/common/page-title';

const PostDetailsPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='space-y-3'>
      <PageTitle title='Post details' />
      {children}
    </div>
  );
};

export default PostDetailsPageLayout;
