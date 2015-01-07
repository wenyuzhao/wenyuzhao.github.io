
function $(id) { return document.getElementById(id); }
function importCSS(id, url) { var links = document.getElementsByTagName('link'); for(var i=0;i<links.length;i++) { if(links[i].id == id) { links[i].href = url; return; } } var head = document.getElementsByTagName('head')[0]; var css = document.createElement("link"); css.rel = "stylesheet"; css.href = url; css.type = 'text/css'; css.id = id; head.appendChild(css); }
function importJS(id, url) { var scripts = document.getElementsByTagName('script'); for(var i=0;i<scripts.length;i++) { if(scripts[i].id == id) { scripts[i].href = url; return; } } var script = document.createElement("script"); script.type = "text/javascript"; script.src = url; script.id = id; document.body.appendChild(script); }
function loadXML(url,callback) {
	var http = new XMLHttpRequest();
	http.open('Get', url, true);
	http.onreadystatechange = function() {
		if(http.readyState == 4)
			if(http.status == 200) {
				callback(http.responseText+"");
			}
	}
	http.send();
}
function resize() {
	if(window.innerWidth >= window.innerHeight) {
		importCSS("frame_css", "/stylesheets/frame.css");
		importCSS("blog_css", "/stylesheets/blog.css");
		importCSS("pygment_trac_css", "/stylesheets/pygment_trac.css");
	}
	else {
		importCSS("frame_css", "/stylesheets/frame_m.css");
		importCSS("blog_css", "/stylesheets/blog_m.css");
		importCSS("pygment_trac_css", "/stylesheets/pygment_trac_m.css");
	}
}
/*
if(navigator.appName == "Microsoft Internet Explorer") window.attachEvent('onresize', resise);
else window.addEventListener('onresize', resise, false);*/
//window.onresize = resize;

resize();
window.onload = function() {
	if(window.innerWidth < window.innerHeight)
		$('navigator').innerHTML = "<h1 style='margin-top: 10vw;' onclick=\"window.location.href='/index.html'\">Wenyu Zhao</h1>";
};

function onFloatButtonClick() {
	window.location.href = "http://wenyuzhao.github.io/index.html";
}

function navigator_button_mouseover(ele) {
	ele.style.background = "rgb(128,0,128)";
	ele.style.color = "white";
}

function navigator_button_mouseout(ele) {
	ele.style.background = "white";
	ele.style.color = "#0066cc";
}
