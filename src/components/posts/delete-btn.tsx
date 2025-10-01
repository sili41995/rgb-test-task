import { FC, MouseEventHandler } from 'react';
import { TrashIcon, Clock10Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IDeleteBtnProps {
  onClick: MouseEventHandler;
  disabled: boolean;
  loading: boolean;
}

const DeleteBtn: FC<IDeleteBtnProps> = ({ onClick, disabled, loading }) => {
  return (
    <Button
      variant='destructive'
      size='icon'
      className='absolute top-4 right-4 size-8'
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <Clock10Icon /> : <TrashIcon />}
    </Button>
  );
};

export default DeleteBtn;
