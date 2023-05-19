import { notFound } from 'next/navigation';

import getMetadata from '@/utils/get-metadata';

import {
  POSTS_PER_PAGE,
  getAllChangelogPosts,
  getChangelogPostBySlug,
  getChangelogPostsPerPage,
} from '@/lib/api-changelog';
import SEO_DATA from '@/lib/seo-data';
import Hero from '@/components/pages/changelog/hero';
import PostsList from '@/components/pages/changelog/posts-list';
import Post from '@/components/pages/changelog/post/post';

export const metadata = getMetadata(SEO_DATA.CHANGELOG);

export default function ChangelogPage({ params: { slug } }: { params: { slug: string } }) {
  if (+slug >= 1) {
    const data = getChangelogPostsPerPage(+slug);

    if (!data) return notFound();

    return (
      <>
        <Hero />
        <PostsList page={+slug} {...data} />
      </>
    );
  }

  const post = getChangelogPostBySlug(slug);

  if (!post) return notFound();

  return <Post post={post} />;
}

export async function generateStaticParams() {
  const posts = getAllChangelogPosts();
  const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

  const pages = posts.map(({ slug }) => {
    return { slug };
  });

  for (let i = 1; i <= pageCount; i += 1) pages.push({ slug: i.toString() });

  return pages;
}
