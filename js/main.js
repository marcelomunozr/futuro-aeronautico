jQuery(function($){
	$('.carrera').on('mouseenter',function(e){
    	e.stopPropagation();
		$(this).find('.info-content').stop(true, true).slideToggle(300);
		$(this).find('img.la-b').stop(true, true).animate({'opacity': '1'},300);
		$(this).find('.request-zone').stop(true, true).slideToggle(300);
	});
	$('.carrera').on('mouseleave',function(e){
    	e.stopPropagation();
		$(this).find('.info-content').stop(true, true).slideToggle(300);
		$(this).find('img.la-b').stop(true, true).animate({'opacity': '0'},300);
		$(this).find('.request-zone').stop(true, true).slideToggle(300);
	});
	
	// $('body').on('click', '.efecto-btn', function(e){
	// 	e.preventDefault();
	// 	$(this).parents('form').submit();
	// });
});