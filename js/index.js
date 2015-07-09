$ = function() {
    return document.querySelectorAll.apply(document, arguments);
};


function resizeTable() {
    var autoCells = $("table.auto-grid td");
    for(var i in autoCells) {
        autoCells[i].height = autoCells[i].clientWidth + "px";
    }
    var cellImages = $("table.auto-grid img");
    for(var i in cellImages) {
        cellImages[i].style.maxWidth = cellImages[i].parentNode.clientWidth + "px";
    }
}

window.addEventListener("load", resizeTable);
window.addEventListener("resize", resizeTable);