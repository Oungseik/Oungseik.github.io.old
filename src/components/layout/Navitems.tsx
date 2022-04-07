import { useRouter } from 'next/router';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';

import NavItem from '../utilities/NavItem';

const navItems = [
  {
    href: '/',
    text: 'Home',
    icon: <AiFillHome size='1.2rem' />,
  },
  {
    href: '/blog',
    text: 'Blog',
    icon: <FaPencilAlt size='1.2rem' />,
  },
  {
    href: '/about',
    text: 'About',
    icon: <BsPersonFill size='1.2rem' />,
  },
];

function NavItems() {
  const { route } = useRouter();
  return (
    <nav className='h-full bg-gray-600'>
      <ul className='flex h-full items-center justify-center md:space-x-10'>
        {navItems.map((item) => (
          <NavItem key={item.text} current={item.href === route} {...item} />
        ))}
      </ul>
    </nav>
  );
}

export default NavItems;
