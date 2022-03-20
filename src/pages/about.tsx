import Head from 'next/head';

const tools = ['MySql', 'SqLite3', 'Svelte'];

export default function About() {
  return (
    <>
      <Head>
        <title>Oung Seik Nyan - About </title>
      </Head>
      <article className='mx-auto max-w-screen-sm space-y-4 px-3 py-10 text-gray-800'>
        <h1 className='text-center text-3xl font-bold md:text-4xl'>About</h1>
        <section className='space-y-4 md:text-lg'>
          <p>
            Hi, I&apos;m Min Aung Thu Win. Oung Seik is my name in the Mon
            language. I was born in Mawlamyine, Mon State, Burma.
          </p>

          <h2 className='pt-6 text-center text-xl font-semibold'>
            Childhood Life
          </h2>
          <p>
            I&apos;m graduated high school education from B.E.H.S Thukhawaddy,
            Mawlamyine. During summer, my father taught me how to craft easy
            gold wearings. I took a Mathematics course for four years from
            Mawlamyine University from 2014 to 2018. I graduated with a Bachelor
            of Science(Maths) on Feb 14, 2019.{' '}
          </p>

          <h2 className='pt-6 text-center text-xl font-semibold'> Careers </h2>
          <p>
            My first job as a field officer in the KEB Hana microfinance company
            was from January to March 2019. But I quit the job during the three
            months of probation period. Then I went to the Sagaing division
            where my cousin&apos;s sister lives and help in her agrochemical
            store. I got a lot of experiences, such as how to deal with
            customers, about plants and treatments.
          </p>

          <h2 className='pt-6 text-center text-xl font-semibold'>
            Software Development Journey
          </h2>
          <p>
            After back from Sagaing, I started investing my time in software
            development. I started with Python programming language, to learn
            data science. But due to very few data science job opportunities in
            my country, I changed my path to web development. I&apos;m curious
            about how OS works on bare metal and how compilers emit different
            machine codes for various hardware and operating systems. I learn
            these things in my free time. Programming paradigms! Learning
            Functional Programming is a lot easier for me than Object-oriented
            Programming.
          </p>

          <h3 className='font-semibold'>
            These are the things I have been learned but not used frequently.
          </h3>
          <ul className='list-inside list-disc text-sky-600'>
            {tools.map((tool) => (
              <li key={tool}>{tool} </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
