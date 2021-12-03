import fs from 'fs';
import glob from 'glob';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

const PAGES_DIR = path.normalize(path.join(process.cwd(), 'pages'));

if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
        process.cwd(),
        'node_modules',
        'esbuild',
        'esbuild.exe',
    );
} else {
    process.env.ESBUILD_BINARY_PATH = path.join(
        process.cwd(),
        'node_modules',
        'esbuild',
        'bin',
        'esbuild',
    );
}

export type MDXMeta = object & {
    title?: string,
    layout?: string,
}

export type MDXPage = {
    path: string,
    slug: string[],
    meta: MDXMeta,
}

export type CompiledMDXPage = MDXPage & {
    mdx: string,
}

export default class MDXPages {
    private static async compile(cwd: string, content: string) {
        return bundleMDX({
            cwd: cwd,
            source: content,
            xdmOptions(options, frontmatter) {
                options.remarkPlugins = [...(options.remarkPlugins ?? [])]
                options.rehypePlugins = [...(options.rehypePlugins ?? [])]
                return options
            },
        });
    }

    static async get(slug: string[]): Promise<CompiledMDXPage> {
        let file = path.join(PAGES_DIR, ...slug) + '.mdx';
        if (!fs.existsSync(file)) file = `${file}.md`;
        const source = fs.readFileSync(file, 'utf8');
        const dirname = path.dirname(file);
        const { code, frontmatter } = await MDXPages.compile(dirname, source);
        return {
            path: file,
            slug: slug,
            meta: frontmatter,
            mdx: code,
        };
    }

    static getAll(): MDXPage[] {
        return glob.sync(`${PAGES_DIR}/**/*.md*`)
            .filter(path => /\.mdx?$/.test(path))
            .map(path => {
                const source = fs.readFileSync(path, 'utf8');
                const slug = path.replaceAll(`${PAGES_DIR}/`, '').replace(/\\/g, '/').replace(/\.mdx?$/, '');
                const { data } = matter(source);
                return {
                    path: path,
                    meta: data,
                    slug: slug.split("/"),
                };
            });
    }
}


