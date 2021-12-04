import matter from 'gray-matter';
import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxjs } from 'micromark-extension-mdxjs'
import { mdxFromMarkdown } from 'mdast-util-mdx'

const WRAPPER = meta => `
export const meta = ${JSON.stringify(meta)};
import { ${meta.layout || 'default'} as Layout } from '../layouts';

<Layout meta={meta}></Layout>
`;

export default () => (tree, file) => {
    // Parse frontmatter metadata
    const { data } = matter(file.value);
    // Get MDX wrapper
    const wrapper = fromMarkdown(WRAPPER(data), {
        extensions: [mdxjs()],
        mdastExtensions: [mdxFromMarkdown]
    });
    // Remove frontmatter
    if (tree.children[0].type === 'thematicBreak') {
        const firstHeadingIndex = tree.children.findIndex(t => t.type === 'heading')
        if (firstHeadingIndex !== -1) {
            tree.children.splice(0, firstHeadingIndex + 1)
        }
    }
    // Insert content into wrapper
    const content = [...tree.children];
    wrapper.children[1].children = content;
    // Update tree
    tree.children = wrapper.children;
}