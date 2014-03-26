	// variables
	
	// listeners, main
	function list() {
		$.getJSON('data.json', function(data) {
			console.log(data);
			var output = '<ul>';
			$.each(data, function(key, val) {
				output += '<li>'+val.name+'</li>';
			});
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		});	
	}
	
	// init
	function init() {
		var loadBtn = document.getElementById('loadBtn');
		loadBtn.addEventListener('click', list, false);	
	}
	
	// utility
	
	window.addEventListener('load', init, false);