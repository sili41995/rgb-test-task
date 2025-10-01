import { FC, PropsWithChildren } from 'react';
import PageTitle from '@/components/common/page-title';

const HomePageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='space-y-3'>
      <PageTitle title='Home' />
      {children}
    </div>
  );
};

export default HomePageLayout;
