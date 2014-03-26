	// variables
	var request = !!(window.XMLHttpRequest) ?
		new XMLHttpRequest() :
		new ActiveXObject('Microsoft.XMLHTTP');
	
	// AJAX flow
	request.open('GET', 'data.xml');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			
			console.log(request.responseXML.getElementsByTagName('name')[0].firstChild.nodeValue);
			
			var items = request.responseXML.getElementsByTagName('name');
			var output = '<ul>';
			for (var i=0; i<items.length; i++) {
				output += '<li>'+items[i].firstChild.nodeValue+'</li>';
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		}
	}
	request.send();