import {
  FaFacebookSquare,
  FaGithub,
  FaGitlab,
  FaLinkedin,
} from 'react-icons/fa';

import clsxm from '@/lib/clsxm';

const socialMedias: SocialMediaButtonProps[] = [
  {
    type: 'Facebook',
    classNames: 'bg-facebook shadow-facebook/60',
    icon: <FaFacebookSquare size='1.5rem' />,
    href: 'https://www.facebook.com/oung.s.nyan.50552338',
  },
  {
    type: 'Linkedin',
    classNames: 'bg-linkedin shadow-linkedin/60',
    icon: <FaLinkedin size='1.5rem' />,
    href: 'https://www.linkedin.com/in/aung-thu-win-1565881b1/',
  },
  {
    type: 'GitHub',
    classNames: 'bg-github shadow-github/60',
    icon: <FaGithub size='1.5rem' />,
    href: 'https://github.com/Oungseik',
  },
  {
    type: 'GitLab',
    classNames: 'bg-gitlab shadow-gitlab/60',
    icon: <FaGitlab size='1.5rem' />,
    href: 'https://gitlab.com/mhemaungthuwin',
  },
];

// TODO: need to add hyper link to the social media
type SocialMediaButtonProps = {
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
    <li
      className={clsxm(
        'rounded-lg px-3 py-2 text-white shadow-lg transition-transform duration-300 hover:-translate-y-2',
        classNames
      )}
    >
      <a className='flex space-x-1' href={href}>
        {icon}
        <span className='hidden md:inline'>{type}</span>
      </a>
    </li>
  );
}

function SocialMedia() {
  return (
    <div className='pt-3 text-left md:block md:pt-8'>
      <p>
        <a
          href='mailto:mhemaungthuwin@gmail.com'
          className='border-b-2 border-b-sky-600/0 text-sky-600 transition duration-300 hover:border-sky-600/100'
        >
          Email me{' '}
        </a>
        or reach me on:
      </p>
      <ul className='flex justify-start space-x-3 py-4 font-roboto text-base md:justify-between'>
        {socialMedias.map((sm) => (
          <SocialMediaButton key={sm.type} {...sm} />
        ))}
      </ul>
    </div>
  );
}
export default SocialMedia;
