export type PostData = {
  slug: string;
  title: string;
  author: string;
  description: string;
  keywords: string[];
  date: string;
};

export type Post = {
  data: PostData;
  content: Promise<string>;
};
