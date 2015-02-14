var resize = function () {
	document.getElementById('content')
}

if ( navigator.appName == "Microsoft Internet Explorer" ) window.attachEvent( 'onresize', resize );
else window.addEventListener( 'resize', resize, false );