const mdxRendererPlugin = require('./utils/mdx-renderer');

const withOptimizedImages = require('next-optimized-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [mdxRendererPlugin]
  }
});

/** @type {import('next').NextConfig} */
module.exports = withOptimizedImages(withMDX({
  reactStrictMode: true,
  optimizeImages: false,
  images: {
    disableStaticImages: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}));
