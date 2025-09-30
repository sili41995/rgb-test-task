import { FC, ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<IContainerProps> = ({ children, className }) => {
  return (
    <div className={['px-4', className ? className : ''].join(' ')}>
      {children}
    </div>
  );
};

export default Container;
