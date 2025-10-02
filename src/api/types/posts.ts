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

export interface IPostReqProps {
  init?: RequestInit;
}

export interface IGetPostsProps extends IPostReqProps {
  page: number;
}

export interface IReqByIdProps extends IPostReqProps {
  id: string;
}

export interface IAddPostProps extends IPostReqProps {
  data: z.infer<typeof postFormSchema>;
  init?: RequestInit;
}

export interface IUpdatePostByIdProps extends IAddPostProps {
  id: string;
}
