export default function Post({ children }: { children: JSX.Element[] }) {
  return (
    <article className='mx-auto max-w-screen-sm space-y-5 px-3 py-10 text-gray-700'>
      {children}
    </article>
  );
}
