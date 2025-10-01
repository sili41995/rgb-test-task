import { FC } from 'react';
import { IPost } from '@/api/types/posts';
import PostDetails from '@/components/posts/post-details';
import PagePaths from '@/constants/page-paths';
import EmptyPostsListMessage from '@/components/posts/empty-posts-list-message';

interface IPostsListProps {
  posts: IPost[] | undefined;
}

const PostsList: FC<IPostsListProps> = ({ posts }) => {
  return posts && posts.length ? (
    <ul className='space-y-4'>
      {posts.map(({ id, text, title }) => {
        const detailsPath = `${PagePaths.posts}/${id}`;

        return (
          <li key={id}>
            <PostDetails
              text={text}
              title={title}
              detailsPath={detailsPath}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <EmptyPostsListMessage />
  );
};

export default PostsList;
