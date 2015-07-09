$ = function() {
    return document.querySelectorAll.apply(document, arguments);
};

function initGrids() {
    
}


window.addEventListener("load", initGrids);
window.addEventListener("resize", initGrids);

