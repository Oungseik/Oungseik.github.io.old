import Head from 'next/head';
import * as React from 'react';

import Hero from '@/components/layout/Hero';
import Timelines from '@/components/layout/Timelines';
import Card from '@/components/utilities/Card';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Oung Seik Nyan - Home</title>
      </Head>
      <Hero />
      <Timelines />
      {/* this is just for demo */}
      <Card />
    </>
  );
}
