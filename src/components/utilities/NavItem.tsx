import Link from 'next/link';

import clsxm from '@/lib/clsxm';

type NavItemProps = {
  current?: boolean;
  href: string;
  text: string;
  icon?: JSX.Element;
};

function NavItem({ href, current, text, icon }: NavItemProps) {
  return (
    <li className='group'>
      <Link href={href}>
        <a
          className={clsxm(
            'flex items-center space-x-2 rounded-lg px-3 py-1 font-semibold text-gray-100 transition duration-300 group-hover:bg-gray-600 group-hover:text-sky-300 md:px-4 md:text-xl',
            current && 'text-sky-400'
          )}
        >
          <span
            className={clsxm(
              'text-gray-300 transition duration-300 group-hover:text-sky-300/80',
              current && 'text-sky-400/80'
            )}
          >
            {icon}
          </span>
          <span className='tracking-wide'>{text}</span>
        </a>
      </Link>
    </li>
  );
}

export default NavItem;
