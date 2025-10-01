import { ErrorMessages } from '@/constants';
import { z } from 'zod';

export const postFormSchema = z.object({
  title: z.string().min(2, {
    message: ErrorMessages.postTitleLength,
  }),
  text: z.string().min(2, {
    message: ErrorMessages.postTextLength,
  }),
});
