import { IGetPostsRes } from '@/types/posts';
import { IPost } from './types/posts';
import { ISendRequestProps } from '@/types/common';

const buildUrl = (...paths: string[]) =>
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/${paths.join('/')}`;

const sendRequest = async <T>({ url, init }: ISendRequestProps) => {
  const res = await fetch(url, init);

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getPosts = (init?: RequestInit) => {
  const url = buildUrl('posts');

  return sendRequest<IGetPostsRes>({ url, init });
};

export const getPost = (id: string, init?: RequestInit) => {
  const url = buildUrl('posts', id);

  return sendRequest<IPost>({ url, init });
};
