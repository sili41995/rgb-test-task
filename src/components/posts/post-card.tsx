import { FC, MouseEvent } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DeleteBtn from '@/components/posts/delete-btn';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import { deletePostById } from '@/api/posts';

interface IPostCardProps {
  text: string;
  title: string;
  detailsPath: string;
  id: number;
}

const PostCard: FC<IPostCardProps> = ({ text, title, detailsPath, id }) => {
  const queryClient = useQueryClient();

  const onDeleteSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.posts],
    });
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () =>
      deletePostById({ id: String(id), init: { cache: 'no-store' } }),
    onSuccess: onDeleteSuccess,
  });

  const onDeleteBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    mutateAsync();
  };

  return (
    <Card className='relative'>
      <DeleteBtn
        disabled={isPending}
        loading={isPending}
        onClick={onDeleteBtnClick}
      />

      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className='w-[30ch] whitespace-nowrap overflow-hidden text-ellipsis'>
          {text}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={detailsPath}
          className='shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gray-600 text-white hover:bg-gray-600/80 h-9 px-4 py-2'
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
