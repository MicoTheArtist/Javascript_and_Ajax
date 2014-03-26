	// variables
	var request = !!(window.XMLHttpRequest) ?
		new XMLHttpRequest() :
		new ActiveXObject('Microsoft.XMLHTTP');
	
	// AJAX flow
	//
		request.open('GET', 'data.txt');
		request.send();
		request.onreadystatechange = function() {
			if ((request.readyState === 4) && (request.status === 200)) {
				for (var i=0; i<100; i++) {
					console.log(request);
					document.writeln(request.response);
				}
			}
		}
	//}