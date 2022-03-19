import Card from '../utilities/Card';

function Cards() {
  return (
    <div className='mx-auto grid max-w-screen-lg grid-cols-2 gap-y-4 md:grid-cols-4'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
