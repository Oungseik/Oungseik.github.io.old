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
    href: '/blogs',
    text: 'blogs',
    icon: <FaPencilAlt size='1.2rem' />,
  },
  {
    href: '/about',
    text: 'About',
    icon: <BsPersonFill size='1.2rem' />,
  },
];

function NavItems() {
  return (
    <nav className='h-full bg-gray-700'>
      <ul className='flex h-full items-center justify-center md:space-x-10'>
        {navItems.map((item) => (
          <NavItem key={item.text} {...item} />
        ))}
      </ul>
    </nav>
  );
}

export default NavItems;
