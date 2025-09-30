import { FC } from 'react';

interface ITextProps {
  text: string;
}

const Text: FC<ITextProps> = ({ text }) => {
  return <p className='leading-7 [&:not(:first-child)]:mt-6'>{text}</p>;
};

export default Text;
