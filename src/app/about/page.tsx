import { FC } from 'react';
import { Metadata } from 'next';
import Container from '@/components/common/container';
import PageTitle from '@/components/common/page-title';
import SectionTitle from '@/components/common/section-title';
import Text from '@/components/common/text';

export const metadata: Metadata = {
  title: 'About',
  description: 'About project',
};

const AboutPage: FC = () => {
  return (
    <div className='space-y-3'>
      <PageTitle title='About' />
      <section>
        <Container className='space-y-3'>
          <SectionTitle title='About project' />
          <Text text='This project is a blog-style application built with Next.js that allows users to browse and read posts. It demonstrates modern web development practices.' />
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
