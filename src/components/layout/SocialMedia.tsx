import { MdEmail } from 'react-icons/md';

import clsxm from '@/lib/clsxm';

import { socialMedias } from '@/data/social-media-data';

export type SocialMediaButtonProps = {
  type: string;
  classNames: string;
  icon: JSX.Element;
  href: string;
};

function SocialMediaButton({
  type,
  classNames,
  icon,
  href,
}: SocialMediaButtonProps) {
  return (
    <li>
      <a
        className={clsxm(
          'flex space-x-1 rounded-lg px-3 py-2 text-white shadow-lg transition-transform duration-300 hover:-translate-y-2',
          classNames
        )}
        href={href}
      >
        {icon}
        <span className='hidden md:inline'>{type}</span>
      </a>
    </li>
  );
}

function SocialMedia() {
  return (
    <div className='pt-3 text-left md:block md:pt-8'>
      <p className='flex text-gray-100'>
        <a
          href='mailto:mhemaungthuwin@gmail.com'
          className='inline-flex items-center border-b-2 border-b-sky-600/0 pr-2 font-bold text-sky-600 transition duration-300 hover:border-sky-600/100'
        >
          <MdEmail size='1.625rem' />
          <span className='pl-1'>Email me</span>
        </a>
        or reach me on:
      </p>
      <ul className='flex justify-start space-x-4 py-4 font-roboto text-base'>
        {socialMedias.map((sm) => (
          <SocialMediaButton key={sm.type} {...sm} />
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
