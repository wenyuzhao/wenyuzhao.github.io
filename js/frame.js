
var $ = function ( id ) { return document.getElementById( id ); };



var onFloatButtonClick = function () {
	window.location.href = "http://wenyuzhao.github.io/index.html";
};

var navigationBar_onmouseover = function (ele) {
	var v = 30/2000;
	var b = 90;
	( new Animation(
		function () {
			var d = v * this.delta();
			b = b - d;
			if ( b > 60 ) {
				ele.style.bottom = b + 'vh';
				$('container').style.height = b + 'vh';
				$('container').style.bottom = 0;
				return true;
			}
			else {
				ele.style.bottom = 60 + 'vh';
				$('container').style.height = 60 + 'vh';
				$('container').style.bottom = 0;
				return false;
			}
		}
	) ).run();
}

var navigationBar_onmouseout = function (ele) {
	var v = 30/2000;
	var b = 60;
	( new Animation(
		function () {
			var d = v * this.delta();
			b = b + d;
			if ( b < 90 ) {
				ele.style.bottom = b + 'vh';
				$('container').style.height = b + 'vh';
				$('container').style.bottom = 0;
				return true;
			}
			else {
				ele.style.bottom = 90 + 'vh';
				$('container').style.height = 90 + 'vh';
				$('container').style.bottom = 0;
				return false;
			}
		}
	) ).run();
}
