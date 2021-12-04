import site from '../site.json';

export { site };

export type PageMeta = object & {
    title?: string | string[],
    description?: string,
    keywords?: string,
    nav?: string,
    comments?: boolean,
    layout?: string,
}

export type PageProps = {
    meta: PageMeta,
    children?: React.ReactNode,
}