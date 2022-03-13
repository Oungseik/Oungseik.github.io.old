import Head from 'next/head';
import * as React from 'react';

import A from '@/components/utilities/A';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Oung Seik Nyan - Home</title>
      </Head>
      <main className='bg-gray-200 font-semibold text-gray-600'>
        <div className='mx-auto space-y-3 py-6 text-center font-playFair tracking-wider md:w-[548px]'>
          <p>Hello, there! </p>
          <p>
            I&apos;m{' '}
            <span className='relative text-xl'>
              <span className='red-sunset absolute -inset-1 block -skew-y-3' />
              <span className='relative font-semibold text-gray-50'>
                Min Aung Thu Win
              </span>
            </span>{' '}
            (Oung Seik Nyan)
          </p>
          <p>
            Web Developer and Computer Science Enthusiast from Mawlamyine, Mon
            State, Burma.{' '}
            <A
              href='/about'
              className='border-b-2 border-sky-500/0 text-sky-500 transition duration-300 hover:border-sky-500/100'
            >
              More about me?
            </A>
          </p>
        </div>
      </main>
    </>
  );
}
