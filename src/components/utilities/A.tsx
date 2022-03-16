import Link from 'next/link';

export type AProps = {
  href: string;
  className?: string;
  children?: string;
};

function A({ className, href, children }: AProps) {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
}

export default A;
