import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { cwd } from 'process';
import rehypeDocument from 'rehype-document';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

const POSTS_PATH = path.join(cwd(), 'contents');

const filenames = fs.readdirSync(POSTS_PATH);
const slugs = filenames.map((post) => post.replace(/.md$/, ''));

const fullPath = (filename: string) => `${POSTS_PATH}/${filename}`;

async function parse(content: string) {
  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeDocument, {
      css: 'https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css',
    })
    .use(rehypeKatex)
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(content);

  return processedContent.toString();
}

const getPost = async (path: string) => {
  const fileContent = fs.readFileSync(path, 'utf-8');
  const { data, content } = matter(fileContent);
  return { data, contentHTML: await parse(content) };
};

const getData = (path: string) => {
  const fileContent = fs.readFileSync(path, 'utf-8');
  const { data } = matter(fileContent);
  return data;
};
const getAllPostsData = () => {
  const postsFullPath = filenames.map(fullPath);
  const allData = postsFullPath.map(getData);
  return allData;
};

export { fullPath, getAllPostsData, getPost, slugs };
