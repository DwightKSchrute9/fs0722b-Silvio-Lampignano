$(function(){
	$(window).scroll(function(event) {
		if ($(this).scrollTop() > 200) {
			$('header').addClass('whiteBackground');
			$('header').removeClass('yellowBackground');
		} else {
			$('header').addClass('yellowBackground');
			$('header').removeClass('whiteBackground');
		}
	});
});