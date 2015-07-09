$ = function() {
    return document.querySelectorAll.apply(document, arguments);
};

Element.prototype.setCSS = function(css) {
    ele = this;
    for(var title in css) {
        ele.css[title] = "" + css[title];
    }
};

function resizeGrid() {
    var autoItems = $(".auto-grid .item");
    for(var i in autoItems) {
        autoItems[i].setCSS({
            width: autoItems[i].clientWidth + "px"
        });
    }

    var cellImages = $(".auto-grid img");
    for(var i in cellImages) {
        cellImages[i].style.maxWidth = cellImages[i].parentNode.clientWidth + "px";
    }
}

window.addEventListener("load", resizeGrid);
window.addEventListener("resize", resizeGrid);