$(function(){
	// Hide game table on start menu
	$('#divTable').css('opacity', 0);
	// Show game table and hide title
	$('.start-btn').on('click', () => {
		$('#title').css('opacity', 0);
		$('#divTable').css('opacity', 1);
	});
	// Notify user if not in correct orientation
	if ( $(window).width() < 768 ) {
		let orientation = window.orientation; // 90 is landscape, 0 is portrait
		if ( orientation === 0 ) {
			$('.orientation-warning').css('display', 'block');
		} else {
			$('.orientation-warning').css('display', 'none');
		}
	}
	$( window ).on( "orientationchange", function( event ) {
		if ( $(window).width() < 768 ) {
			let orientation = window.orientation; // 90 is landscape, 0 is portrait
			if ( orientation === 0 ) {
				$('.orientation-warning').css('display', 'block');
			} else {
				$('.orientation-warning').css('display', 'none');
			}
		}
	});
	$('#close-warning').on('click', () => {
		$('.orientation-warning').css('display', 'none');
	});
	$('.start-btn').on('click', () => {
		let width = $('#divTable').width();
		if ( width > 681 ) {
			$('.orientation-warning').css('font-size', '120%');
			$('.orientation-warning').find('span').css('font-size', '120%');
		}
	});
});