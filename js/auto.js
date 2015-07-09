
Element.prototype.setCSS = function(css) {
    ele = this;
    for(var title in css) {
        ele.css[title] = "" + css[title];
    }
};

AutoGridSize = {
    columns: {
        0: 1,
        256: 2
        512: 4,
        2048: 8
    }
}

function resizeTable(table) {
    table.columns = 
    tbody = trs.children[0];
    for(var i in tbody.children) {
        var tr = tbody.children[i];
        for(var j in tr.children) {
            var td = tr.children[j];
            td.setCSS({
                width: table.clientWidth/
            })
        }
    }

    trs = table.children[0].children;
    for(var i in trs) {
        trs
    }
}

function resizeTables() {
    var autoTables = $("table.auto-grid");
    for(var i in autoTables) {
        autoTables[i].setCSS({
            width: autoTables[i].clientWidth + "px"
        });
    }

    var autoCells = $("table.auto-grid td");
    for(var i in autoCells) {
        autoCells[i].height = autoCells[i].clientWidth + "px";
        autoCells[i].height = autoCells[i].parentNode.parentNode.clientWidth / 3 + "px";
    }

    var cellImages = $("table.auto-grid img");
    for(var i in cellImages) {
        cellImages[i].style.maxWidth = cellImages[i].parentNode.clientWidth + "px";
    }
}

window.addEventListener("load", resizeTable);
window.addEventListener("resize", resizeTable);