import React, { FC, FormEventHandler } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { postFormSchema } from '@/validators/posts';
import z from 'zod';
import { Button } from '@/components/ui/button';
import { Clock10Icon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Text from '@/components/common/text';

interface IPostFormProps {
  form: UseFormReturn<z.infer<typeof postFormSchema>>;
  error: Error | null;
  isPending: boolean;
  actionBtnLabel: string;
  onSubmit: FormEventHandler;
}

const PostForm: FC<IPostFormProps> = ({
  form,
  onSubmit,
  error,
  isPending,
  actionBtnLabel,
}) => {
  return (
    <div className='max-w-100 mx-auto space-y-8'>
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
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
                <FormLabel>Text</FormLabel>
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
            <span>{actionBtnLabel}</span>
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

export default PostForm;
