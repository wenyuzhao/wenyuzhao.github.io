import { PageProps, site } from "../utils/page";

export default function MetaTags({ meta }: PageProps) {
    return <>
        <link rel='icon' href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌚</text></svg>' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='author' content={site.author} />
        <meta name='description' content={(meta.description ?? site.default_description) + site.description_postfix} />
        <meta name='keywords' content={(meta.keywords ? (meta.keywords + ',') : '') + site.common_keywords} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={meta.title + site.title_postfix} />
        <meta property='og:description' content={(meta.description ?? site.default_description) + site.description_postfix} />
        <meta property='og:site_name' content={site.title} />
        <meta property='article:publisher' content='https://www.facebook.com/wenyu.zhao2' />
    </>;
}