import Head from "next/head";
import React from "react";

export default function DefaultLayout(props: any) {
    return (
        <div>
            {/* <Head></Head> */}
            {props.children}
        </div>
    );
}