import styles from './Card.module.css';

import clsxm from '@/lib/clsxm';

import CardBack, { CardBackProps } from './CardBack';
import CardFront, { CardFrontProps } from './CardFront';
import CardInner from './CardInner';

// title in CardFrontProps and CardBackProps are take from CardProps.title
// to remove duplication of `title` when create data
export type CardProps = {
  title: string;
  cardBackProps: CardBackProps;
  cardFrontProps: CardFrontProps;
};

// if you need more reusability, try to implement with `renderProps` design pattern
function Card({ title, cardFrontProps, cardBackProps }: CardProps) {
  return (
    <div className={clsxm(styles.card, 'mx-auto h-56 w-40 lg:h-64 lg:w-48')}>
      <CardInner>
        <CardFront {...cardFrontProps} title={title} />
        <CardBack {...cardBackProps} title={title} />
      </CardInner>
    </div>
  );
}

export default Card;
