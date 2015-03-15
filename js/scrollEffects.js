$(document).ready(function(){
	$(window).scroll(function() {
		
		$('.animate').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("animGraph");
			}
		});
	});
});