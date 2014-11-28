function getHttpRespond(url) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.open('Get', url, false);
	httpRequest.send();
	while(1)
		if(httpRequest.readyState == 4)
			if(httpRequest.status == 200)
				break;
	return httpRequest.responseText;
}

var onmessage = function(e) {
	var x = [];
	for(var i=0;i<e.data.length;i++)
		x.push(getHttpRespond(e.data[i]));
	postMessage(x);
}