import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { allPosts } from '../lib/posts';
import { SEGMENTS } from '../segments';
export async function GET(context: APIContext) {
  const posts = await allPosts();
  return rss({
    title: 'Pretty Baller',
    description: 'Football and all things sports from a 22-year-old girl who knows ball.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.dek,
      pubDate: p.data.date,
      link: `/${SEGMENTS[p.data.segment].slug}/${p.id}`,
      categories: [SEGMENTS[p.data.segment].name],
    })),
  });
}
