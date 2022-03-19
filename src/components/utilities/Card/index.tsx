import styles from './Card.module.css';

import clsxm from '@/lib/clsxm';

import CardBack from './CardBack';
import CardFront from './CardFront';
import CardInner from './CardInner';

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
      <CardInner>
        <CardFront />
        <CardBack />
      </CardInner>
    </div>
  );
}

export default Card;
