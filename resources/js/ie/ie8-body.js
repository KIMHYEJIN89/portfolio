$(document).ready(function(){
	$('*').each(function(){
		var font_weight = $(this).css('font-weight');
		if (font_weight == '100') {
			$(this).addClass('fw100');
		} else if(font_weight == '300') {
			$(this).addClass('fw300');
		} else if(font_weight == '500') {
			$(this).addClass('fw500');
		} else if(font_weight == '700' || font_weight == 'bold') {
			$(this).addClass('fw700');
		}
	});
});
