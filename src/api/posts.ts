import { IPost, IGetPostsRes, IReqByIdProps } from './types/posts';
import { buildUrl, sendRequest } from './http-service';

export const getPosts = (init?: RequestInit) => {
  const url = buildUrl('posts');

  return sendRequest<IGetPostsRes>({ url, init });
};

export const getPostById = ({ id, init }: IReqByIdProps) => {
  const url = buildUrl('posts', id);

  return sendRequest<IPost>({ url, init });
};

export const deletePostById = ({ id, init }: IReqByIdProps) => {
  const url = buildUrl('posts', id);

  return sendRequest<IPost>({
    url,
    init: {
      ...init,
      method: 'DELETE',
    },
  });
};
