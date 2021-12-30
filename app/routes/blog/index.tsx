import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { getPostsList, Frontmatter } from '~/services/blog.server';

type LoaderData = {
  posts: Frontmatter[];
};

export const loader: LoaderFunction = async () => {
  const posts = await getPostsList({
    locale: 'cn',
    type: 'blog'
  });
  console.log(posts);
  return json({ posts });
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.title}>{post.title}</div>
      ))}
    </div>
  );
}
