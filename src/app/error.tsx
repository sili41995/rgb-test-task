'use client';

import { FC } from 'react';
import Container from '@/components/common/container';
import PageTitle from '@/components/common/page-title';
import SectionTitle from '@/components/common/section-title';
import { Button } from '@/components/ui/button';

interface IErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: FC<IErrorProps> = ({ error, reset }) => {
  const onTryAgainBtnClick = () => reset();

  return (
    <Container className='space-y-10'>
      <PageTitle title='Error' />
      <SectionTitle title={error.message} />
      <Button
        onClick={onTryAgainBtnClick}
        className='block mx-auto'
      >
        Try again
      </Button>
    </Container>
  );
};

export default Error;
