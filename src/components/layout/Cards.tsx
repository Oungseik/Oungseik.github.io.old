import { cardData } from '@/data/card-data';

import Card from '../utilities/Card';

function Cards() {
  return (
    <div className=' grid grid-cols-2 gap-y-8 md:grid-cols-4'>
      {cardData.map((datum) => (
        <Card key={datum.title} {...datum} />
      ))}
    </div>
  );
}

export default Cards;
