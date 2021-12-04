import React from "react";
import { Utterances } from 'utterances-react-component'

export default function Comments() {
    return <section>
        <br />
        <br />
        <br />
        <Utterances
            repo="wenyuzhao/wenyuzhao.github.io"
            theme="github-light"
            issueTerm="pathname"
            label="website-comment"
        />
    </section>;
}