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
