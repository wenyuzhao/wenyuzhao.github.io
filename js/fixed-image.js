'use strict';

(function () {


function getWindowSize() {
    if(window.innerWidth <= 800) {
        return {
            width: screen.width,
            height: screen.height
        };
    }
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
};

function makeFixed(image) {
    var rect = image.parentNode.getBoundingClientRect();
    
    var W = image.offsetWidth, H = image.offsetHeight;
    var size = getWindowSize();
    var PW = size.width, PH = size.height;

    var w, h, left, top;

    if (W / H > PW / PH) {
        w = PH / H * W, h = PH;
    } else {
        w = PW, h = PW / W * H;
    }
    left = (w - PW) / 2;
    top = (h - PH) / 2;

    image.style.position = 'absolute';
    image.style.width = w + 'px';
    image.style.height = h + 'px';
    image.style.top = (-rect.top - top) + 'px';
    image.style.left = (-rect.left - left) + 'px';
    //image.style.top = '0px';
    //image.style.left = '0px';
    //image.style.transform = 'translateY(' + (-rect.top - top) + 'px) translateX(' + (-rect.left - left) + 'px)';
}

window.addEventListener('load', function () {
    function __make_fix() {
        requestAnimationFrame(__make_fix);
        Array.from(document.querySelectorAll('.fixed')).forEach(makeFixed);
    };


    //window.addEventListener('scroll', __make_fix);
    //window.addEventListener('resize', __make_fix);
    //window.addEventListener('ontouchstart', __make_fix);
    //window.addEventListener('ontouchmove', __make_fix);
    //window.addEventListener('ontouchend', __make_fix);
    __make_fix();
});

})();