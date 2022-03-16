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
        'flex items-center space-x-1 text-xl font-semibold text-gray-100 transition duration-300 hover:text-sky-500',
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
