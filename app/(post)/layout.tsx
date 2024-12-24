import { Header } from './header';
import { getPosts } from '../get-posts';
import Comments from './components/comments';

export const revalidate = 60;

export default async function Layout({ children }) {
  const posts = await getPosts();

  return (
    <>
      <article className="text-gray-800 dark:text-gray-300 mb-20">
        <Header posts={posts} />

        {children}
      </article>
      <Comments />
    </>
  );
}
