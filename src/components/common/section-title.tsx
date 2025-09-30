import { FC } from 'react';

interface ISectionTitleProps {
  title: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({ title }) => {
  return (
    <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
      {title}
    </h2>
  );
};

export default SectionTitle;
