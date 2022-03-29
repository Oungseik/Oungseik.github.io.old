export type PostData = {
  title: string;
  date: string;
  tags: string[];
};

export type Post = {
  data: PostData;
  content: string;
};
