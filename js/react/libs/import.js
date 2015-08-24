var xmlhttp;

function importJS(url) {
    var script = document.createElement('script');  

    script.src = url;  

    script.setAttribute("type", "text/javascript");  

    document.head.appendChild(script);
}

function importJSX(url) {
    var script = document.createElement('script');  

    script.src = url;  

    script.setAttribute("type", type || "text/jsx");  

    document.head.appendChild(script);
}