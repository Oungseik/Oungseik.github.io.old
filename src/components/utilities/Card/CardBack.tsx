import { SiGnu } from 'react-icons/si';

import styles from './Card.module.css';

import clsxm from '@/lib/clsxm';

function CardBack() {
  return (
    <div
      className={clsxm(
        styles.cardBack,
        'flex flex-col justify-between rounded-lg bg-gray-200 px-3 py-2 text-gray-700'
      )}
    >
      <div className='flex space-x-1 border-b-2 border-gray-700 pb-2 text-sm'>
        <SiGnu size='1.25rem' /> <span>GNU Linux</span>
      </div>

      <div className='text-center text-sm'>
        <p>
          I use linux as my development environment. I mostly comfortable with
          Debian based linux.
        </p>
      </div>

      <div className='flex rotate-180 border-b-2 border-gray-700 pb-2 text-sm'>
        <SiGnu size='1.25rem' /> <span>GNU linux</span>
      </div>
    </div>
  );
}

export default CardBack;
