import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { IoMdStarOutline } from 'react-icons/io';

type TimeLineProps = {
  from: string;
  to: string;
  title: string;
  description: string;
};

const timeLines = [
  {
    from: '2020',
    to: 'Present',
    title: 'Gold Smith',
    description:
      'Not as professional, just work as part time job and help my parent at home.',
  },
  {
    from: '2019 January',
    to: '2019 March',
    title: 'Loan Officer',
    description: 'Worked as loan officer in KEB Hana Microfinance company.',
  },
  {
    from: '2014',
    to: '2018',
    title: 'B.Sc (Mathematics)',
    description:
      'Studied Mathematics in Mawlamyine University. Gratuated at Feb 14, 2019',
  },
  {
    from: '2003',
    to: '2013',
    title: 'Basic Education',
    description: 'Studied basic education from B.E.H.S Thukhawaddy, Mawlamyine',
  },
];

function TimeLine({ from, to, title, description }: TimeLineProps) {
  return (
    <ul className='text-gray-700'>
      <li>
        <div className='flex space-x-8'>
          <IoMdStarOutline
            size='1.75rem'
            className='shrink-0 bg-gray-700 text-white'
          />
          <div className='grow space-y-2'>
            <h2 className=' bg-gray-700 px-2 text-lg text-base font-semibold text-gray-100 md:text-xl'>
              {from} - {to}{' '}
              <span className='hidden pl-6 md:inline'>{title}</span>
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </li>
    </ul>
  );
}

function Timelines() {
  return (
    <div className='mx-auto animate-fadein-timeline px-3 py-12 md:max-w-[548px] md:px-0 md:py-16'>
      <h2 className='md flex items-center pb-8 text-2xl font-semibold text-sky-700 md:pb-10 md:text-3xl'>
        <BsFillCalendarCheckFill />
        <span className='pl-2'>Timeline</span>
      </h2>
      <ul className='space-y-5 text-gray-700'>
        {timeLines.map((tl) => (
          <TimeLine key={tl.from + tl.to} {...tl} />
        ))}
      </ul>
    </div>
  );
}

export default Timelines;
