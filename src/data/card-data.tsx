import { SiGnu } from 'react-icons/si';

import { CardProps } from '@/components/utilities/Card';

export const cardData: CardProps[] = [
  {
    title: 'GNU/Linux',
    cardBackProps: {
      icon: <SiGnu size='1.25rem' />,
      description: 'I love GNU/Linux.',
      twClasses: 'bg-gray-200 text-sm text-gray-700',
    },

    cardFrontProps: {
      twClasses: 'bg-orange-300 text-gray-700 shadow-lg shadow-orange-300/60',
      icon: <SiGnu size='4rem' />,
    },
  },
];
