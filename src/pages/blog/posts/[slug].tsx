import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { fullPath, getPost, slugs } from '@/lib/posts';

import Post from '@/components/layout/Post';

export default function BlogPosts({
  data,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Post>
        <MDXRemote {...source} />
      </Post>
    </>
  );
}

export async function getStaticPaths() {
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const file = fullPath(slug + '.mdx');

  const { data, content } = getPost(file);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [require('mdx-prism')],
    },
  });

  return {
    props: { data, source: mdxSource },
  };
};
