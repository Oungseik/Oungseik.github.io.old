import styles from './Card.module.css';

import clsxm from '@/lib/clsxm';

export type CardFrontProps = {
  twClasses?: string;
  icon: JSX.Element;
  title?: string;
};

function CardFront({ twClasses, icon, title }: CardFrontProps) {
  return (
    <div
      className={clsxm(
        styles.cardFront,
        'flex flex-col items-center justify-center space-y-3 rounded-lg text-2xl tracking-wider text-gray-800 shadow-lg',
        twClasses
      )}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
}

export default CardFront;
