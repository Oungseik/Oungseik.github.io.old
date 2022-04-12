import { GiSkills } from 'react-icons/gi';

import Cards from './Cards';

function Skills() {
  return (
    <div className='mx-auto mt-12 flex max-w-screen-lg flex-col px-3 md:mt-16'>
      <div className='space-y-2'>
        <h2 className='flex text-3xl font-semibold text-sky-700 '>
          <span className='opacity-90'>
            <GiSkills />
          </span>
          <span className='pl-2'>Skills</span>
        </h2>
        <p className='text-lg text-gray-700 md:text-xl'>
          These are the things I am most familiar with and use frequently.
        </p>
      </div>
      <div className='mt-8 max-h-96 overflow-auto py-8 md:max-h-full md:overflow-visible'>
        <Cards />
      </div>
      {/* TODO : try to implement non confident skills with better idea */}
      {/* <div> */}
      {/*   <p className='text-lg text-gray-700 md:text-xl'> */}
      {/*     I also have some knowledges about these things: */}
      {/*   </p> */}
      {/*   <section> */}
      {/*     <div className=''> */}

      {/*     </div> */}
      {/*   </section> */}
      {/* </div> */}
    </div>
  );
}

export default Skills;
