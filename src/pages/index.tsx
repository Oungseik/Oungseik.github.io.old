import Head from 'next/head';
import * as React from 'react';

import Hero from '@/components/layout/Hero';
import Skills from '@/components/layout/Skills';
import Timelines from '@/components/layout/Timelines';

export default function HomePage() {
  return (
    <>
      <Head>
        <meta property='og:title' content='Oung Seik Nyan' key='ogtitle' />
        <meta
          property='og:description'
          content='Personal Website'
          key='ogdesc'
        />
        <meta
          property='og:image'
          content='../../public/images/og-img.png'
          key='ogimage'
        />
        <meta
          property='og:site_name'
          content='Oung Seik Nyan - Home'
          key='ogsitename'
        />
        <meta
          property='og:url'
          content='https://oungseik-github-io.vercel.app/'
          key='ogurl'
        />
        <meta property='og:type' content='Personal Website' key='ogtype' />
        <title>Oung Seik Nyan - Home</title>
      </Head>
      <Hero />
      <Timelines />
      <Skills />
    </>
  );
}
