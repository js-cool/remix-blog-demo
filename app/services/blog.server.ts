import { readdir, readFile } from 'fs/promises';
import { join, resolve } from 'path';

type IGetPostsList = {
  locale: string;
  type: string;
};

export type Frontmatter = {
  title: string;
};

export async function getPostsList({ locale, type }: IGetPostsList) {
  const contentDir = resolve('content', type);
  const postDirs = await readdir(contentDir);
  const posts: Array<Frontmatter> = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const postDir of postDirs) {
    const contentPath = join(contentDir, postDir);
    const postPath = join(contentPath, `${locale}.mdx`);
    // eslint-disable-next-line no-await-in-loop
    const source = await readFile(postPath, { encoding: 'utf-8' });
    posts.push({ title: source });
  }
  return posts;
}
