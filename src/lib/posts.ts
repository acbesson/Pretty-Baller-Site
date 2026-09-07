import { getCollection } from 'astro:content';
export async function allPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft || import.meta.env.DEV);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
