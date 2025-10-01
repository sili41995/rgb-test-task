import { ISendRequestProps } from '@/types/common';

export const buildUrl = (...paths: string[]) =>
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/${paths.join('/')}`;

export const sendRequest = async <T>({ url, init }: ISendRequestProps) => {
  const response = await fetch(url, init);
  if (!response.ok || response.status === 404) {
    const error = await response.json();

    throw new Error(error.message);
  }

  return (await response.json()) as T;
};
