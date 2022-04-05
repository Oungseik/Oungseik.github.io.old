import { getAllPostsData } from '@/lib/posts';
import { PostData } from '@/lib/types';

import A from '@/components/utilities/A';
import Date from '@/components/utilities/Date';

function Post({ data }: { data: PostData }) {
  return (
    <div>
      <A
        className='block text-lg font-bold  md:text-2xl '
        href={`/blog/posts/${data.slug}`}
      >
        {data.title}
      </A>
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
