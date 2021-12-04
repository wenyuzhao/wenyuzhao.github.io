import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { PageProps, MetaTags, site } from './layout';

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
                    segments.map(s => <>
                        <span style={{ color: '#BDBDBD' }}>{' ➤ '}</span>
                        {s}
                    </>)
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
            <Footer meta={meta} />
        </div>
    );
}

if (globalThis.window) window.addEventListener('load', () => console.info('Hi, how are you 🐨'));