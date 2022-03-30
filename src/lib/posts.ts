import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { cwd } from 'process';

import { Post } from './types';

const POSTS_PATH = path.join(cwd(), 'contents');

const fullPath = (filename: string) => `${POSTS_PATH}/${filename}`;

const filenames = fs.readdirSync(POSTS_PATH);
const slugs = filenames.map((post) => post.replace(/.mdx$/, ''));

type GetPost = (path: string) => Post;
const getPost: GetPost = (path) => {
  const fileContent = fs.readFileSync(path);
  const { data, content } = matter(fileContent) as unknown as Post; // this can cause something i don't know.

  return { data, content };
};

const getAllPostsData = () => {
  const postsFullPath = filenames.map(fullPath);
  const allData = postsFullPath.map(getPost).map((post) => post.data);

  return allData;
};

export { fullPath, getAllPostsData, getPost, slugs };
