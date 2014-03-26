	// variables
	var request = !!(window.XMLHttpRequest) ?
		new XMLHttpRequest() :
		new ActiveXObject('Microsoft.XMLHTTP');
	
	// AJAX flow
	request.open('GET', 'data.json');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			console.log(JSON.parse(request.response));
			
			var items = JSON.parse(request.response);
			var output = '<ul>';
			for (var key in items) {
				output += '<li>'+items[key].name+'</li>';
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		}
	}
	request.send();