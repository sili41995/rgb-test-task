import { IGetPostByIdProps, IGetPostsRes } from '@/types/posts';
import { IPost } from './types/posts';
import { buildUrl, sendRequest } from './http-service';

export const getPosts = (init?: RequestInit) => {
  const url = buildUrl('posts');

  return sendRequest<IGetPostsRes>({ url, init });
};

export const getPostById =  ({ id, init }: IGetPostByIdProps) => {
  const url = buildUrl('posts', id);

  return sendRequest<IPost>({ url, init });
};
