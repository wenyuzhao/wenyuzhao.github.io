import NextHead from 'next/head';
import { PageProps, site } from '../utils/page';

export default function Head({ meta }: PageProps) {
    return (
        <NextHead>
            <title>{meta.title + site.title_postfix}</title>;

            <meta name="theme-color" content="#FFFAFA" />
            <meta charSet="utf-8" />
            <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
            <meta name='author' content={site.author} />
            <meta name='description' content={(meta.description ?? site.default_description) + site.description_postfix} />
            <meta name='keywords' content={(meta.keywords ? (meta.keywords + ',') : '') + site.common_keywords} />
            <meta property='og:type' content='article' />
            <meta property='og:title' content={meta.title + site.title_postfix} />
            <meta property='og:description' content={(meta.description ?? site.default_description) + site.description_postfix} />
            <meta property='og:site_name' content={site.title} />
            <meta property='article:publisher' content='https://www.facebook.com/wenyu.zhao2' />

            <link rel='icon' href='favicon.ico' />
        </NextHead>
    );
}