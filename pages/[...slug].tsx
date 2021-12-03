import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import MDXPages, { CompiledMDXPage } from "../utils/mdx";
import styles from "../styles/Home.module.css";
import { GetStaticPaths, GetStaticProps } from "next";



export default function MDXPage({ mdx, meta }: CompiledMDXPage) {
    const Component = useMemo(() => getMDXComponent(mdx), [mdx]);
    return (
        <div className={styles.container}>
            <Component />
        </div>
    );
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const page = await MDXPages.get(params!.slug as string[]);
    return {
        props: { ...page },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = MDXPages.getAll().map(({ slug }) => ({ params: { slug } }));
    return {
        paths,
        fallback: false,
    };
};
