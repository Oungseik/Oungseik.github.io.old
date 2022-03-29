import {
  FaFacebookSquare,
  FaGithub,
  FaGitlab,
  FaLinkedin,
} from 'react-icons/fa';

import { SocialMediaButtonProps } from '@/components/layout/SocialMedia';

export const socialMedias: SocialMediaButtonProps[] = [
  {
    type: 'Facebook',
    classNames: 'bg-facebook shadow-facebook/60',
    icon: <FaFacebookSquare size='1.5rem' />,
    href: 'https://www.facebook.com/aung.t.win.5283166/',
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
