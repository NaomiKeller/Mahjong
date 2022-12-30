$(function(){
	$('#divTable').css('opacity', 0);
	$('.start-btn').on('click', () => {
		console.log($('#title'))
		$('#title').css('opacity', 0);
		$('#divTable').css('opacity', 1);
	})
});