$(function(){
	// Hide game table on start menu
	$('#divTable').css('opacity', 0);
	// Show game table and hide title
	$('.start-btn').on('click', () => {
		console.log($('#title'))
		$('#title').css('opacity', 0);
		$('#divTable').css('opacity', 1);
	});
	$(window).resize( () => {
		let width = $(window).width();
		let triggerWidth = 790;
		console.log(width);
		if (width <= triggerWidth) {
			alert('If on mobile device, it is recommended to play horizontally.');
		}
	});
});

screen.orientation.lock("landscape")
	.then(function() {
		alert('Locked');
	})
	.catch(function(error) {
		alert(error);
	});