import mdxRendererPlugin from './utils/mdx-renderer.mjs';
import withOptimizedImages from 'next-optimized-images';
import MDX from '@next/mdx';

const withMDX = MDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [mdxRendererPlugin]
  }
});

/** @type {import('next').NextConfig} */
export default withOptimizedImages(withMDX({
  reactStrictMode: true,
  optimizeImages: false,
  images: {
    disableStaticImages: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}));
