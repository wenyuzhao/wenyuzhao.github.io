function title_mouseover(ele) {
	ele.style.background = "rgb(128,0,128)";
}

function title_mouseout(ele) {
	ele.style.background = "transparent";
}

function hideDisqus() {
	$('disqus_thread').style.display = "none";
}

if(navigator.appName == "Microsoft Internet Explorer") window.attachEvent('onload',hideDisqus);
else window.addEventListener('load',hideDisqus,false);