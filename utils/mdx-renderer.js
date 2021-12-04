const matter = require('gray-matter');

module.exports = () => (tree, file) => {
    const { data } = matter(file.contents);

    // Remove frontmatter
    if (tree.children[0].type === 'thematicBreak') {
        const firstHeadingIndex = tree.children.findIndex(t => t.type === 'heading')
        if (firstHeadingIndex !== -1) {
            tree.children.splice(0, firstHeadingIndex + 1)
        }
    }

    // Export frontmatter metadata
    tree.children.unshift({
        type: 'export',
        value: `export const meta = ${JSON.stringify(data)}`
    });

    // Apply layout template
    tree.children.unshift(
        {
            type: 'import',
            value: `import { ${data.layout || 'default'} as Layout } from '../layouts'`
        },
        {
            type: 'jsx',
            value: `<Layout meta={meta}>`
        },
    );

    tree.children.push({
        type: 'jsx',
        value: `</Layout>`,
    });
}