import { IPost } from '@/api/types/posts';

export interface IGetPostsRes {
  data: IPost[];
  count: number;
  filteredCount: number;
}

export interface IGetPostByIdProps {
  id: string;
  init?: RequestInit;
}
