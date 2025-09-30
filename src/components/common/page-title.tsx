import { FC } from 'react';

interface IPageTitleProps {
  title: string;
}

const PageTitle: FC<IPageTitleProps> = ({ title }) => {
  return (
    <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>
      {title}
    </h1>
  );
};

export default PageTitle;
