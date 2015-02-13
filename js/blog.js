var title_mouseover = function ( ele ) {
	ele.style.background = "rgb( 128, 0, 128 )";
}

var title_mouseout = function ( ele ) {
	ele.style.background = "transparent";
}

var hideDisqus = function () {
	$( 'disqus_thread' ).style.display = "none";
}


var importDisqus = function (id) {
	document.getElementById(id).innerHTML += "<div id=\"disqus_thread\"></div>
			<script type=\"text/javascript\">
				/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
				var disqus_shortname = 'wenyuzhao-github'; // required: replace example with your forum shortname

				/* * * DON'T EDIT BELOW THIS LINE * * */
				(function() {
		   			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
		    		dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
		    		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
				})();
			</script>
			<noscript>Please enable JavaScript to view the <a href=\"http://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>";
}

var importLaTeX = function() {
	var script= document.createElement("script");
	script.type = "text/javascript";
	script.src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default";
	document.head.appendChild(script);
}

if ( navigator.appName == "Microsoft Internet Explorer" ) window.attachEvent( 'onload', hideDisqus );
else window.addEventListener( 'load', hideDisqus, false );