
try{
loadFiles(
		['../xml/index_plane.xml','../xml/index.xml'],
		function(xmls) {
			$('plane').innerHTML += xmls[0];
			$('right').innerHTML = xmls[1];
		}
);
}catch(e){alert(e)}
