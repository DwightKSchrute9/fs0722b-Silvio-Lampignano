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

$(function(){
	$(window).scroll(function(event) {
		if ($(this).scrollTop() > 200) {
			$('#getStarted').addClass('greenBackground');
			$('#getStarted').removeClass('blackBackground');
		} else {
			$('#getStarted').addClass('blackBackground');
			$('#getStarted').removeClass('greenBackground');
		}
	});
});