import NextImage from '@/components/NextImage';
import A from '@/components/utilities/A';

function Hero() {
  return (
    <main className='bg-hero-img md:bg-hero-img-lg flex items-center px-3 font-semibold text-gray-700 md:h-[500px]'>
      <div className='mx-auto space-y-6 py-10 text-center font-playFair tracking-wider md:w-[548px] md:text-xl'>
        <NextImage
          className='mx-auto block h-40 w-40 overflow-hidden rounded-full md:hidden'
          src='images/profile/profile.jpg'
          alt='min aung thu win'
          height={160}
          width={160}
        />
        <div className='animate-fadein space-y-3'>
          <h1> Hello, there! </h1>
          <p>
            I&apos;m{' '}
            <span className='relative text-xl md:text-3xl'>
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
              className='border-b-2 border-sky-600/0 text-sky-600 transition duration-300 hover:border-sky-600/100'
            >
              More about me?
            </A>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
