import { GiSkills } from 'react-icons/gi';

import Cards from './Cards';

function Skills() {
  return (
    <div className='mx-auto flex max-w-screen-lg flex-col px-3 py-12 md:pb-16'>
      <div className='space-y-2'>
        <h2 className='flex text-3xl font-semibold text-sky-700 '>
          <GiSkills />
          <span className='pl-2'>Skills</span>
        </h2>
        <p className='text-lg text-gray-700 md:text-xl'>
          These are the things I am most familiar with and use frequently.
        </p>
      </div>
      <div className='my-8 max-h-96 overflow-auto py-8'>
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
