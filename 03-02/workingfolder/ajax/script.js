	// listeners, main
	function list() {
		$('.update').load('data.txt');
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
		var updateArray = document.getElementsByClassName('update');
		console.log(updateArray);
		
		for (var key in updateArray) {
			updateArray[key].innerHTML = '';
		}
	}
	
	window.addEventListener('load', init, false);