import { FC } from 'react';

interface ITextProps {
  text: string;
  className?: string;
}

const Text: FC<ITextProps> = ({ text, className }) => {
  return (
    <p
      className={['leading-7 [&:not(:first-child)]:mt-6', className].join(' ')}
    >
      {text}
    </p>
  );
};

export default Text;
