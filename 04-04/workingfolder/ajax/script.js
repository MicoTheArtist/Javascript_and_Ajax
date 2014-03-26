	// variables
	
	// listeners, main
	function list() {
		$.getJSON('data.json', function(data) {
			console.log(data);
			var searchField = document.getElementById('search').value;
			var myExp = new RegExp(searchField, 'i');			
			var output = '<ul>';
			$.each(data, function(key, val) {
				if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
					output += '<li>';
					output += '<h2>'+val.name+'</h2>';
					output += '<img src="images/'+val.shortname+'_tn.jpg" alt="'+val.name+'"';
					output += '<p>'+val.bio+'</p>';
					output += '</li>';
				}
			});
			output += '</ul>';
			$('#update').html(output);
		});	
	}
	
	// init
	function init() {
		var searchValue = document.getElementById('search');
		searchValue.addEventListener('keyup', list, false);
	}
	
	// utility
	
	window.addEventListener('load', init, false);