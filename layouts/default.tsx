import Link from 'next/link';
import React, { useEffect } from 'react';
import Comments from '../components/Comments';
import Head from '../components/Head';
import { PageProps } from '../utils/page';
import styles from './default.module.css';

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
            <h1 className={styles.title}>
                {first}
                {
                    segments.map(s => <span key={s}>
                        <span style={{ color: '#BDBDBD', fontSize: '0.8em' }}>{' ➤ '}</span>
                        {s}
                    </span>)
                }
            </h1>
        );
    } else {
        return <h1 className={styles.title}>{title}</h1>;
    }
};

const Header = ({ meta }: PageProps) => <>
    <header>
        <Title title={meta.title ?? ''} />
        <nav>
            <NavItem href='/' id='home' name='Home' meta={meta} />
            <NavItem href='https://github.com/wenyuzhao' id='github' name='GitHub' meta={meta} />
            <NavItem href='/about' id='about' name='About Me' meta={meta} />
        </nav>
    </header>
</>;

const Footer = ({ meta }: PageProps) => <>
    <footer style={{ textAlign: 'center' }}>© 2022 Wenyu Zhao</footer>
</>;

export default function DefaultLayout({ meta, children }: PageProps) {
    useEffect(() => {
        document.body.classList.add(styles.context);
        return () => document.body.classList.remove(styles.context);
    });
    return (
        <main className={styles.layout}>
            <Head meta={meta} />
            <Header meta={meta} />
            <article>
                {children}
            </article>
            {meta.comments && <Comments />}
            <Footer meta={meta} />
        </main>
    );
}
