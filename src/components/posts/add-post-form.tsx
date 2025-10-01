'use client';

import React, { useState } from 'react';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { postFormSchema } from '@/validators/posts';
import { Button } from '@/components/ui/button';
import { Clock10Icon } from 'lucide-react';
import { addPost } from '@/api/posts';
import Text from '../common/text';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';

const AddPostForm = () => {
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      text: '',
      title: '',
    },
  });

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.posts],
      });
    },
  });

  const onSubmit = async (data: z.infer<typeof postFormSchema>) => {
    await mutateAsync({ data, init: { cache: 'no-store' } });

    form.reset();
  };

  return (
    <div className='max-w-100 mx-auto space-y-8'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Title'
                    {...field}
                  />
                </FormControl>
                <FormDescription>Add title</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='text'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Text'
                    {...field}
                  />
                </FormControl>
                <FormDescription>Add text</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            disabled={isPending}
          >
            {isPending && <Clock10Icon />}
            <span>Add</span>
          </Button>
        </form>
      </Form>
      {error && (
        <Text
          text={error.message}
          className='text-red-600'
        />
      )}
    </div>
  );
};

export default AddPostForm;
