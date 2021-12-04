import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Comments from '../components/Comments';
import MetaTags from '../components/MetaTags';
import { PageProps, site } from '../utils/page';

const NavItem = ({ meta, id, name, href }: PageProps & { id: string, name: String, href: string }) => (
    <Link href={href} >
        <a style={{ fontWeight: meta.nav == id ? '900' : 'normal' }}>
            {name}
        </a>
    </Link>
);

const Title = ({ title }: { title: string | string[] }) => {
    if (Array.isArray(title)) {
        const [first, ...segments] = title;
        return (
            <h1 className='title'>
                {first}
                {
                    segments.map(s => <span key={s}>
                        <span style={{ color: '#BDBDBD' }}>{' ➤ '}</span>
                        {s}
                    </span>)
                }
            </h1>
        );
    } else {
        return <h1 className='title'>{title}</h1>;
    }
};

const Header = ({ meta }: PageProps) => <>
    <header>
        <Title title={meta.title ?? ''} />
        <nav className='nav'>
            <NavItem href='/' id='home' name='Home' meta={meta} />
            <NavItem href='https://github.com/wenyuzhao' id='github' name='GitHub' meta={meta} />
            <NavItem href='/about' id='about' name='About Me' meta={meta} />
        </nav>
    </header >
</>;

const Footer = ({ meta }: PageProps) => <>
    <footer style={{ textAlign: 'center' }}>© 2021 Wenyu Zhao</footer>
</>;

export default function DefaultLayout({ meta, children }: PageProps) {
    return (
        <div>
            <Head>
                <title>{meta.title + site.title_postfix}</title>;
                <MetaTags meta={meta} />
            </Head>
            <Header meta={meta} />
            <article>
                {children}
            </article>
            {meta.comments && <Comments />}
            <Footer meta={meta} />
        </div>
    );
}
