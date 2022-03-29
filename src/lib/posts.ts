import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { cwd } from 'process';

import { Post } from './types';

const POSTS_PATH = path.join(cwd(), 'contents');

type FullPath = (fileName: string) => string;
const fullPath: FullPath = (fileName: string) => `${POSTS_PATH}/${fileName}`;

const fileNames = fs.readdirSync(POSTS_PATH);
const posts = fileNames.map((post) => post.replace(/.mdx$/, ''));

type GetPost = (path: string) => Post;
const getPost: GetPost = (path) => {
  const fileContent = fs.readFileSync(path);
  const { data, content } = matter(fileContent) as unknown as Post; // this can cause something i don't know.

  return { data, content };
};

export { fullPath, getPost, posts };
