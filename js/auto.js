// selector

$ = function() {
    return document.querySelectorAll.apply(document, arguments);
};

Element.prototype.setCSS = function(css) {
    ele = this;
    for(var title in css) {
        ele.style["" + title] = "" + css[title];
    }
};

// auto elements

var Auto = {}
Auto.Elements = {};
Auto.Elements.Grid = document.registerElement("auto-grid");

Auto.resize = {}
Auto.resize.grid = function(grid) {

    var spacing = Number.parseInt( grid.getAttribute("spacing") || grid.getAttribute("data-spacing") || 0 );

    eval("var columns = " + ( grid.getAttribute("cols") || grid.getAttribute("data-cols") || grid.getAttribute("columns") || grid.getAttribute("data-columns") || "{ 0: 1, 256: 2, 512: 3, 1024: 4 }" ));

    
    var cols = -1, __i = "0";
    for(var i in columns) {
        if(grid.clientWidth < Number.parseInt(i)) {
            cols = columns[__i];
            break;
        }
        __i = i;
    }
    if(cols == -1) cols = columns[__i];


    var w = (grid.clientWidth - spacing * (cols - 1)) / cols, h = w;

    for(var i=0; i<grid.children.length; i++) {
        var item = grid.children[i];
        var x = (i % cols) * (w + spacing);
        var y = Math.floor(i / cols) * (h + spacing);
        item.setCSS({
            "position": "absolute",
            "whiteSpace" : "nowrap",
            "margin": "0",
            "width":  w + "px",
            "height": h + "px",
            "left":   x + "px",
            "top":    y + "px",
            "maxWidth": w + "px",
            "maxHeight": h + "px"
        });
    }

    grid.setCSS({
        "height": Math.floor(grid.children.length-1 / cols) * (h + spacing) + h + "px"
    });

};
/*
Auto.move = function(item, x, y) {
    var v = 20;
    var i = setInterval(function() {

    }, 40);
}
*/





function resizeGrids() {

    var autoGrids = $(".auto-grid");
    for(var i=0; i<autoGrids.length; i++) {
        Auto.resize.grid(autoGrids[i]);
    }

    var cellImages = $(".auto-grid img");
    for(var i=0; i<cellImages.length; i++) {
        cellImages[i].style.maxWidth = cellImages[i].parentNode.clientWidth + "px";
    }
}


window.addEventListener("load", resizeGrids);
window.addEventListener("resize", resizeGrids);