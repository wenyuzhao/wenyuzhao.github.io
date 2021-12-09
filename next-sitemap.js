const glob = require('glob');
const path = require('path');

const SITE_URL = 'https://wenyu.me';
const PAGES_DIR = path.normalize(path.join(process.cwd(), 'pages'));

module.exports = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    additionalPaths: async (config) => {
        const files = glob.sync(`${PAGES_DIR}/**/*.md*`).filter(path => /\.mdx?$/.test(path));
        const results = [];
        for (const file of files) {
            const slug = file.replaceAll(PAGES_DIR, '').replace(/\\/g, '/').replace(/\.mdx?$/, '');
            results.push(await config.transform(config, slug));
        }
        return results;
    }
}