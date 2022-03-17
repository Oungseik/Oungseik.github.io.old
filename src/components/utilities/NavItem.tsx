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
    <li
      className={clsxm(
        'flex items-center space-x-1 rounded-lg px-2 py-1 text-sm font-semibold text-gray-100 transition duration-300 hover:bg-gray-600 md:text-xl',
        current && 'text-sky-500'
      )}
    >
      {icon}
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  );
}

export default NavItem;
