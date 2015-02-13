var WEB_Target = "mobile";/*desk or mobile*/




document.addEventListener( 'onload', function () {
	var p = navigator.platform;
	if ( p.indexOf(“Win”) == 0 ||
		 p.indexOf(“Mac”) == 0 ||
		 p == “X11”            ||
		 p.indexOf(“Linux”) == 0 ) {
		/*desk*/
	}
	else {
		/*mobile*/
		importCSS
	}
} );