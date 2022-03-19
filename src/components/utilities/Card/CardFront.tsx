import { SiGnu } from 'react-icons/si';

import styles from './Card.module.css';

import clsxm from '@/lib/clsxm';

function CardFront() {
  return (
    <div
      className={clsxm(
        styles.cardFront,
        'flex flex-col items-center justify-center space-y-3 rounded-lg bg-orange-300 text-gray-700 shadow-lg shadow-orange-300/60'
      )}
    >
      <SiGnu size='4rem' />
      <span>GNU Linux</span>
    </div>
  );
}

export default CardFront;
