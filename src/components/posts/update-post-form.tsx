'use client';

import { FC } from 'react';
import z from 'zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { postFormSchema } from '@/validators/posts';
import { updatePostById } from '@/api/posts';
import { QueryKeys } from '@/constants';
import PostForm from '@/components/posts/post-form';

interface IUpdatePostFormProps {
  id: string;
  text: string;
  title: string;
}

const UpdatePostForm: FC<IUpdatePostFormProps> = ({ id, text, title }) => {
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      text,
      title,
    },
  });

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: updatePostById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.posts, id],
      });
    },
  });

  const onSubmit = async (data: z.infer<typeof postFormSchema>) => {
    await mutateAsync({ data, id, init: { cache: 'no-store' } });
  };

  const onFormSubmit = form.handleSubmit(onSubmit);

  return (
    <PostForm
      form={form}
      onSubmit={onFormSubmit}
      error={error}
      isPending={isPending}
      actionBtnLabel='Update'
    />
  );
};

export default UpdatePostForm;
