import mdxRendererPlugin from './utils/mdx-renderer.js';
import withImages from 'next-images';
import MDX from '@next/mdx';
import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxjs } from 'micromark-extension-mdxjs'
import { mdxFromMarkdown } from 'mdast-util-mdx'

const withMDX = MDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [mdxRendererPlugin({ fromMarkdown, mdxjs, mdxFromMarkdown })]
  }
});

/** @type {import('next').NextConfig} */
export default withImages(withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}));
