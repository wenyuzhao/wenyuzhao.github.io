$ = function() {
    return document.querySelectorAll.apply(document, arguments);
};


function resizeTable() {
    autoCells = $("table.auto-grid > td");
    for(var cell in autoCells) {
        cell.style.height = cell.style.width;
    }
    cellImages = $("table.auto-grid > img");
    for(var img in cellImages) {
        img.style.maxWidth = img.parentNode.style.width;
    }
}

window.addEventListener("load", resizeTable);
window.addEventListener("resize", resizeTable);