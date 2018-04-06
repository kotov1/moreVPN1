
$(function() {

	// Фиксирование состояние рекомендованной карточки тарифного плана
	$(".table-pricing").hover( function(){
		$(".table-pricing").eq(0).removeClass('recomend');	
	});

	$(".table-pricing").mouseleave(function(){
		$(".table-pricing").eq(0).addClass('recomend');
	});

});