import Head from 'next/head';
import * as React from 'react';

import Hero from '@/components/layout/Hero';
import Timelines from '@/components/layout/Timelines';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Oung Seik Nyan - Home</title>
      </Head>
      <Hero />
      <Timelines />
    </>
  );
}
