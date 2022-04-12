import { BsFillCalendarCheckFill } from 'react-icons/bs';

type TimeLineProps = {
  from: string;
  to: string;
  title: string;
  description: string;
};

const timeLines = [
  {
    from: '2022 April',
    to: 'Present',
    title: 'Junior Quality Assurance Engineer',
    description:
      "I have chosen to join the <strong>QA team</strong> of Myanmar's No.1 Testing Company <strong>(Qualy Myanmar)</strong>.",
  },
  {
    from: '2020',
    to: '2022 April',
    title: 'Gold Smith',
    description:
      "Work as a <strong>Gold Smith</strong> in my free time. I'm not really good at goldsmithing, just help my parents to make them happy.",
  },
  {
    from: '2019 January',
    to: '2019 March',
    title: 'Loan Officer',
    description:
      'Worked as <strong>loan officer</strong> in <strong>KEB Hana Microfinance company</strong>.',
  },
  {
    from: '2014',
    to: '2018',
    title: 'B.Sc (Mathematics)',
    description:
      'Studied <strong>Mathematics</strong> in Mawlamyine University. Gratuated at Feb 14, 2019',
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
          <div className=' rounded-sm bg-sky-700 shadow-sm'>
            <div className='ml-1.5 grow space-y-2 bg-gray-50 py-2 pl-3'>
              <h4 className='font-semibold text-gray-700'>
                {from} - {to}{' '}
                <span className='hidden pl-6 md:inline'>{title}</span>
              </h4>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

function Timelines() {
  return (
    <div className='mx-auto mt-12 animate-fadein-timeline px-3 md:mt-16 md:max-w-[548px] md:px-0'>
      <h2 className='flex items-center pb-8 text-3xl font-semibold text-sky-700 md:pb-10'>
        <span className='opacity-90'>
          <BsFillCalendarCheckFill />
        </span>
        <span className='pl-2'>Timeline</span>
      </h2>
      <ul className='space-y-6 text-gray-700'>
        {timeLines.map((tl) => (
          <TimeLine key={tl.from + tl.to} {...tl} />
        ))}
      </ul>
    </div>
  );
}

export default Timelines;
