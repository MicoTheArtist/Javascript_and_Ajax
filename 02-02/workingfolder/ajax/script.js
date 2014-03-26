	// variables
	var request = !!(window.XMLHttpRequest) ?
		new XMLHttpRequest() :
		new ActiveXObject('Microsoft.XMLHTTP');
	
	// AJAX Flow
	request.open('GET', 'data.txt');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			console.log(request);
			
			var modify = document.getElementsByTagName('li');
			for (var i=0; i<modify.length; i++) {
				modify[i].innerHTML = request.response;
			}
		}
	}
	request.send();