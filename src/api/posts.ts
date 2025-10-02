import {
  IPost,
  IGetPostsRes,
  IReqByIdProps,
  IAddPostProps,
  IUpdatePostByIdProps,
  IGetPostsProps,
} from './types/posts';
import { buildUrl, sendRequest } from './http-service';

export const getPosts = ({
  page,
  init,
}: IGetPostsProps): Promise<IGetPostsRes> => {
  const url = buildUrl(`posts?page=${page}`);

  return sendRequest<IGetPostsRes>({ url, init });
};

export const getPostById = ({ id, init }: IReqByIdProps): Promise<IPost> => {
  const url = buildUrl('posts', id);

  return sendRequest<IPost>({ url, init });
};

export const addPost = ({ data, init }: IAddPostProps): Promise<IPost> => {
  const url = buildUrl('posts');

  return sendRequest<IPost>({
    url,
    init: {
      ...init,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        ...(init && init.headers),
        'content-type': 'application/json',
      },
    },
  });
};

export const updatePostById = ({
  data,
  id,
  init,
}: IUpdatePostByIdProps): Promise<IPost> => {
  const url = buildUrl('posts', id);

  return sendRequest<IPost>({
    url,
    init: {
      ...init,
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        ...(init && init.headers),
        'content-type': 'application/json',
      },
    },
  });
};

export const deletePostById = ({ id, init }: IReqByIdProps): Promise<IPost> => {
  const url = buildUrl('posts', id);

  return sendRequest<IPost>({
    url,
    init: {
      ...init,
      method: 'DELETE',
    },
  });
};
