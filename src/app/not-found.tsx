import Container from '@/components/common/container';
import PageTitle from '@/components/common/page-title';
import SectionTitle from '@/components/common/section-title';
import Text from '@/components/common/text';
import React from 'react';

const NotFound = () => {
  return (
    <Container className='space-y-3'>
      <PageTitle title='Not Found' />
      <SectionTitle title='Page not found' />
      <Text text='This page could not be found.' />
    </Container>
  );
};

export default NotFound;
