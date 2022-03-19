import { FaPython, FaRust } from 'react-icons/fa';
import {
  SiGnu,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

import { CardProps } from '@/components/utilities/Card';

// export skills as CardProps to render as card
export const skills: CardProps[] = [
  // programming languages
  {
    title: 'Rust',
    cardFrontProps: {
      twClasses:
        'bg-gradient-to-br from-amber-800 via-amber-500 to-amber-800 shadow-amber-800/60',
      icon: <FaRust size='4rem' />,
    },
    cardBackProps: {
      twClasses: 'text-xs',
      icon: <FaRust size='1.25rem' />,
      description:
        'My favorite programming language. Programming in small details may arise many problems, but these are reasons to learn.',
    },
  },

  {
    title: 'TypeScript',
    cardFrontProps: {
      twClasses:
        'bg-gradient-to-br from-blue-600 via-blue-300 to-blue-600 shadow-blue-600/60',
      icon: <SiTypescript size='4rem' />,
    },
    cardBackProps: {
      icon: <SiTypescript size='1.25rem' />,
      description: 'Ease to use, rich type system, I really love typescript.',
    },
  },
  {
    title: 'JavaScript',
    cardFrontProps: {
      twClasses:
        'bg-gradient-to-br from-yellow-600 via-yellow-300 to-yellow-600 shadow-yellow-600/60',
      icon: <SiJavascript size='4rem' />,
    },
    cardBackProps: {
      icon: <SiJavascript size='1.25rem' />,
      description:
        "Honestly, I don't really like JavaScript. I learned it because of essential in web development.",
    },
  },
  {
    title: 'Python',
    cardFrontProps: {
      twClasses:
        'bg-gradient-to-br from-blue-500 to-yellow-500 shadow-gray-500/60',
      icon: <FaPython size='4rem' />,
    },
    cardBackProps: {
      icon: <FaPython size='1.25rem' />,
      description: 'The first programming language I learned.',
    },
  },

  // technologies and frameworks
  {
    title: 'GNU/Linux',
    cardFrontProps: {
      twClasses:
        'bg-gradient-to-br from-orange-800 via-orange-500 to-orange-800 shadow-orange-800/60',
      icon: <SiGnu size='4rem' />,
    },
    cardBackProps: {
      twClasses: 'text-xs',
      icon: <SiGnu size='1.25rem' />,
      description:
        'Not skillful as a professional system administrator, but I have Linux super-user experience especially Debian-based.',
    },
  },
  {
    title: 'React',
    cardFrontProps: {
      twClasses:
        'bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 shadow-gray-800/60 text-[#61DAFB] ',
      icon: <SiReact size='4rem' />,
    },
    cardBackProps: {
      icon: <SiReact size='1.25rem' />,
      description:
        'React is my first-learned UI library. I built this with Next.js',
    },
  },
  {
    title: 'Next.js',
    cardFrontProps: {
      twClasses:
        'bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 shadow-gray-900/60 text-white ',
      icon: <SiNextdotjs size='4rem' />,
    },
    cardBackProps: {
      icon: <SiNextdotjs size='1.25rem' />,
      description: 'Next.js is one of the reason why I like React.',
    },
  },
];
