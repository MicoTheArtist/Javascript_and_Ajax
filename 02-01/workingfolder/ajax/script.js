	// variables
	var request = !!(window.XMLHttpRequest) ?
		new XMLHttpRequest() :
		new ActiveXObject('Microsoft.XMLHTTP');
	
	// AJAX flow
	request.open('GET', 'data.txt');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			console.log(request);
			var modify = document.getElementById('update');
			modify.innerHTML = request.response;
		}
	}
	request.send();