function append(json) {
	var node_div = document.createElement("div");
	node_div.className = 'blog';

	var node_title = document.createElement("p");
	node_title.className = 'blog';
	node_title.id = 'title';
	node_title.innerHTML = json.title;

	var node_content = document.createElement("pre");
	node_content.className = 'blog';
	node_content.id = 'content';
	node_content.innerHTML = json.content;

	var node_date = document.createElement("p");
	node_date.className = 'blog';
	node_date.id = 'date';
	node_date.innerHTML = json.date + ' @' + json.tag;

	var node_plus = document.createElement("img");
	node_plus.className = 'blog';
	node_plus.src = 'img/plus.png';
	node_plus.setAttribute("onclick", "onPlusButtonClick(this)")

	node_div.appendChild(node_title);
	node_div.appendChild(node_content);
	node_div.appendChild(node_date);
	node_div.appendChild(node_plus);

	$('right').appendChild(node_div);

}

var next = 0;
function getMoreArticles() {
	var urls = [];
	if(next >= 0) {
		if(next<9) {
			for(var i=next;i>=0;i--)
				urls.push('../json/blog/'+i+'.json');
			next = i-1;
		}
		else {
			var n = 0;
			for(var i=0;i<10;i++) {
				n = next - i;
				urls.push('../json/blog/'+n+'.json');
			}
			next = n-1;
		}
		loadFiles(
			urls,
			function(xmls) {

				for(var i=0;i<xmls.length;i++) {
					var json = eval('('+xmls[i]+')')
					append(json);
					/*$('right').innerHTML += "<div class='blog'><p class='blog' id='title'>"
											+ json.title
											+"</p><pre class='blog' id='context'>"
											+ json.context
											+"</pre><p class='blog' id='time'>"
											+ json.date + ' @' + json.tag
											+"</p><img onclick='onQuickButtonClick()' id='plus' src='img/plus.png' /></div>";
					*/
				}
			}
		);
	}
}

loadFiles(
	['../xml/blog_plane.xml'],
	function(xmls) {
		//$('plane').innerHTML = "<img id='quickButton' src='img/icon.png' onclick='onQuickButtonClick()'/>"+xmls[0];
		$('plane').innerHTML += xmls[0];
		loadFiles(
			['../json/blog.json'],
			function(data) {
				var manifest = eval("("+data[0]+")");
				next = manifest.articleCount-1;
				getMoreArticles();
			}
		);
	}
);



function onPlusButtonClick(ele) {
	if(ele.parentNode.childNodes[1].style.display=="none") {
		ele.src='../img/up.png';
		ele.parentNode.childNodes[1].style.display="block";
	}
	else {
		ele.src='../img/plus.png';
		ele.parentNode.childNodes[1].style.display="none";
	}
}
