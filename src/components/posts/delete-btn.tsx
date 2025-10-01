import { FC, MouseEventHandler } from 'react';
import { TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IDeleteBtnProps {
  onClick: MouseEventHandler;
  disabled?: boolean;
}

const DeleteBtn: FC<IDeleteBtnProps> = ({ onClick, disabled = false }) => {
  return (
    <Button
      variant='destructive'
      size='icon'
      className='absolute top-4 right-4 size-8'
      onClick={onClick}
      disabled={disabled}
    >
      <TrashIcon />
    </Button>
  );
};

export default DeleteBtn;
