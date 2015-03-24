jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	//fadeout/animate timeline when scrollup the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top < $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').is('.is-hidden, .bounce-out') ) {
                    $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden bounce-out').addClass('bounce-in');
            }
			if($(this).offset().top >= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').is('.bounce-in')) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('bounce-in').addClass('bounce-out');   
			} else if($(this).offset().top >= $(window).scrollTop()+$(window).height()*0.80 && $(this).find('.cd-timeline-img').is('.bounce-out')) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('bounce-out').addClass('is-hidden');   
			}
		});
	});
});