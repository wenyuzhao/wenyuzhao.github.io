var hideDisqus = function () {
	$( 'disqus_thread' ).style.display = "none";
}

if ( navigator.appName == "Microsoft Internet Explorer" ) window.attachEvent( 'onload', hideDisqus );
else window.addEventListener( 'load', hideDisqus, false );