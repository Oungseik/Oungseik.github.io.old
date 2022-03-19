import { SiGnu } from 'react-icons/si';

import styles from './Card.module.css';

import clsxm from '@/lib/clsxm';

// type CardFrontType = {
//   name: string;
//   logo: JSX.Element;
//   twClasses?: string;
// };

// type CardBackType = {};

// type CardProps = {};

function Card() {
  return (
    <div className={clsxm(styles.card, 'mx-auto my-10 h-64 w-48')}>
      <div
        className={clsxm(
          styles.cardInner,
          'rounded-lg font-playFair font-semibold tracking-wide shadow-lg shadow-gray-500/60'
        )}
      >
        <div
          className={clsxm(
            styles.cardFront,
            'flex flex-col items-center justify-center space-y-3 rounded-lg bg-orange-300 text-gray-700 shadow-lg shadow-orange-300/60'
          )}
        >
          <SiGnu size='4rem' />
          <span>GNU Linux</span>
        </div>
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
              I use linux as my development environment. I mostly comfortable
              with Debian based linux.
            </p>
          </div>

          <div className='flex rotate-180 border-b-2 border-gray-700 pb-2 text-sm'>
            <SiGnu size='1.25rem' /> <span>GNU linux</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
