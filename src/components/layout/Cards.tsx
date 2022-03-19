import { skills } from '@/data/skills';

import Card from '../utilities/Card';

function Cards() {
  return (
    <div className='grid grid-cols-2 gap-y-8 md:grid-cols-4'>
      {skills.map((skill) => (
        <Card key={skill.title} {...skill} />
      ))}
    </div>
  );
}

export default Cards;
