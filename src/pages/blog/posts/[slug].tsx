import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { fullPath, getPost, slugs } from '@/lib/posts';

import Post from '@/components/layout/Post';

export default function BlogPosts({
  data,
  contentHTML,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Post contentHTML={contentHTML} />
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
  const id = params?.slug;
  const file = fullPath(id + '.md');
  const { data, contentHTML } = await getPost(file);

  return {
    props: { data, contentHTML },
  };
};
