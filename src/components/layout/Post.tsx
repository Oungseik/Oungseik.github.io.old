export default function Post({ contentHTML }: { contentHTML: string }) {
  return (
    <article
      className='mx-auto max-w-screen-sm space-y-4 px-3 py-10 text-gray-800'
      dangerouslySetInnerHTML={{ __html: contentHTML }}
    />
  );
}
