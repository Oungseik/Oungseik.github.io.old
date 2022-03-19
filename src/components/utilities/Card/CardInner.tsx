import styles from './Card.module.css';

import clsxm from '@/lib/clsxm';

function CardInner({ children }: { children: JSX.Element[] }) {
  return (
    <div
      className={clsxm(
        styles.cardInner,
        'rounded-lg font-playFair font-semibold tracking-wide shadow-lg shadow-gray-500/60'
      )}
    >
      {children}
    </div>
  );
}

export default CardInner;
