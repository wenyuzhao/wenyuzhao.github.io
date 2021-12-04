export default function Comments() {
    return <>
        <br />
        <br />
        <br />
        <section
            ref={elem => {
                if (!elem) return;
                const script = document.createElement("script");
                script.src = "https://utteranc.es/client.js";
                script.async = true;
                script.crossOrigin = "anonymous";
                script.setAttribute("repo", "wenyuzhao/wenyuzhao.github.io");
                script.setAttribute("issue-term", "title");
                script.setAttribute("label", "website-comment");
                script.setAttribute("theme", "github-light");
                elem.appendChild(script);
            }}
        />
    </>;
}