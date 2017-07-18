$(document).ready(function(){
	$('button#reset').on('click', function(){
		funtion timer(){
			var count = $('#countdown').text();
			while (count > 0){
				count--;
				$('#countdown').text(count);
			};
		};
		timer();
	});
});
