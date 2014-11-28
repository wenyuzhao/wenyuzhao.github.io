function $(id) {
	return document.getElementById(id);
}

function importScript(url) {
	var script = document.createElement("script")
    script.type = "text/javascript";
    script.src = url;  
    document.body.appendChild(script);
}


//var fileLoaderWorker = new Worker('js/fileLoaderWorker.js');

var current_i = 0;
var _response = [];

function loadFiles(urls,callback) {
	_loadFiles(urls,callback,Object.create(_response));
}

function _loadFiles(urls,callback,response) {

	var http = new XMLHttpRequest();
	http.open('Get', urls[current_i], true);
	http.onreadystatechange = function() {
		if(http.readyState == 4)
			if(http.status == 200) {
				response.push(http.responseText);
				if(current_i<urls.length-1) {
					current_i++;
					_loadFiles(urls,callback,response)
				}
				else {
					current_i = 0;
					callback(response);
					response = []
				}
			}
	}
	http.send();
}


function setPage(url,plane_url,cssPath) {
	$('right').innerHTML = getHttpRespond(url);
	$('plane').innerHTML = "<img id='quickButton' src='img/icon.png'/>" + getHttpRespond(plane_url);
	//$('pageCss').href = cssPath;
}

function onLoad() {
	//setPage('/xml/index.xml','/xml/index_plane.xml');
	$('right').innerHTML = getHttpRespond('/xml/index.xml');
	$('plane').innerHTML += getHttpRespond('/xml/index_plane.xml');
}

function onQuickButtonClick() {
	//setPage('/xml/welcome.xml', '/xml/welcome_plane.xml', 'css/welcome.css');
	window.location.href = "index.html";
}

$('right').innerHTML = '';