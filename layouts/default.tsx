import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { PageProps, Title, MetaTags, site } from "./layout";

const NavItem = ({ meta, id, name, href }: PageProps & { id: string, name: String, href: string }) => (
    <Link href={href} >
        <a style={{ fontWeight: meta.nav == id ? '900' : 'normal' }}>
            {name}
        </a>
    </Link>
);


const Header = ({ meta }: PageProps) => <>
    <header>
        <h1 className='title'>{meta.title}</h1>
        <nav className="nav">
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
    useEffect(() => {
        console.info('Hi, how are you 🐨');
    });
    return (
        <div>
            <Head>
                <title>{meta.title + site.title_postfix}</title>;
                <Title meta={meta} />
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