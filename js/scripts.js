
$(function() {

	// Фиксирование состояние рекомендованной карточки тарифного плана
	$(".tarrifs-item").hover( function(){
		$(".tarrifs-item").eq(0).removeClass('recommend');	
	});

	$(".tarrifs-item").mouseleave(function(){
		$(".tarrifs-item").eq(0).addClass('recommend');
	});


	$('.card-header').click(function() {
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
		} else {
			$('.card-header').removeClass('opened');
			$(this).addClass('opened');
		}
		
	});

	$('.my-tooltip').tooltip();

});