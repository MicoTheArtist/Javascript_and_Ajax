	// variables
	/*
	var request = !!(window.XMLHttpRequest) ?
		new XMLHttpRequest() :
		new ActiveXObject('Microsoft.XMLHTTP');
	*/
	// Ajax Flow
	var request = window.XMLHttpRequest;
	request.open('GET', 'data.txt');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			console.log(request);
			document.writeln(request.response);
		}
	}
	request.send();