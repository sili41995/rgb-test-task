import z from 'zod';
import { postFormSchema } from '@/validators/posts';

export interface IPost {
  id: number;
  title: string;
  text: string;
}

export interface IGetPostsRes {
  data: IPost[];
  count: number;
  filteredCount: number;
}

export interface IReqByIdProps {
  id: string;
  init?: RequestInit;
}

export interface IAddPostProps {
  data: z.infer<typeof postFormSchema>;
  init?: RequestInit;
}
