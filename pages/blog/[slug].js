import Head from 'next/head';
import { format, parseISO } from 'date-fns';
// import renderToString from 'next-mdx-remote/render-to-string';
// import hydrate from 'next-mdx-remote/hydrate';

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { getAllPosts } from '../../lib/data';

export default function BlogPage({ title, date, content, source }) {
  const hydratedContent = { content };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="border-b-2 border-gray-200 mb-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="text-gray-600 text-md">
            {format(parseISO(date), 'do MMMM, uuu')}
          </div>
        </div>

        <div className="prose">
          {/* {hydratedContent} */}
          <MDXRemote { ...content } components={hydratedContent} />
        </div>

      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await serialize(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}