	// variables
	var request = !!(window.XMLHttpRequest) ?
		new XMLHttpRequest() :
		new ActiveXObject('Microsoft.XMLHTTP');

	// listeners, main
	function list() {
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
	}
	
	// init
	function init() {
		var loadBtn = document.getElementById('loadBtn');
		loadBtn.addEventListener('click', list, false);
		
		var clearBtn = document.getElementById('clearBtn');
		clearBtn.addEventListener('click', clearDisp, false);	
	}
	
	// utility
	function clearDisp() {
		document.getElementById('update').innerHTML = '';	
	}
	
	window.addEventListener('load', init, false);