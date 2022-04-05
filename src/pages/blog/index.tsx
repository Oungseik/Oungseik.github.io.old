import Link from 'next/link';

import { getAllPostsData } from '@/lib/posts';
import { PostData } from '@/lib/types';

import Date from '@/components/utilities/Date';

function Post({ data }: { data: PostData }) {
  return (
    <div>
      <Link href={`/blog/posts/${data.slug}`}>
        <a className='block text-lg font-bold  md:text-2xl '>{data.title}</a>
      </Link>
      {/* TODO reserve to render tags */}
      <Date
        className='text-sm opacity-70 md:text-base'
        dateString={data.date}
      />
    </div>
  );
}

export default function Blog({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <section className='my-10 mx-auto max-w-screen-sm space-y-8 px-3'>
      <h1 className='opacity-70'>What&apos;s New!</h1>
      {allPostsData.slice(0, 10).map((data) => (
        <Post key={data.slug} data={data} />
      ))}
    </section>
  );
}

export async function getStaticProps() {
  const allPostsData = getAllPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
