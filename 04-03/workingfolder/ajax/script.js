	// variables
	
	// listeners, main
	function list() {
		$.getJSON('data.json', function(data) {
			console.log(data);
			var searchField = document.getElementById('search').value;
			var myExp = new RegExp(searchField, 'i');

			var output = '<ul>';
			for (var key in data) {
				if ((data[key].name.search(myExp) != -1) || (data[key].bio.search(myExp) != -1)) {
					output += '<li>';
					output += '<h2>'+data[key].name+'</h2>';
					output += '<img src="images/'+data[key].shortname+'_tn.jpg" alt="'+data[key].name+'">';
					output += '<p>'+data[key].bio+'</p>';
					output += '</li>';
				}
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		});	
	}
	
	// init
	function init() {
		var searchValue = document.getElementById('search');
		searchValue.addEventListener('keyup', list, false);
		
		var clearBtn = document.getElementById('clearBtn');
		clearBtn.addEventListener('click', clearDisp, false);
	}
	
	// utility
	function clearDisp() {
		document.getElementById('update').innerHTML = '';
	}
	
	window.addEventListener('load', init, false);





/*
$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, 'i');
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>'+val.name+'</h2>';
				output += '<img src="images/'+val.shortname+'_tn.jpg" alt="name">';
				output += '<p>'+val.bio+'</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	});
});
*/