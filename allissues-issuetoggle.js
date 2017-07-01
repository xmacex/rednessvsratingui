var fertilitychange = function() {
	$('img#fertility').css('opacity', f.getValue());
};

var ovulationchange = function() {
	$('img#ovulation').css('opacity', o.getValue());
};

var periodcalendarchange = function() {
	$('img#period_calendar').css('opacity', p.getValue());
};

var f = $('input#fertility').slider()
	.on('slide', fertilitychange)
	.data('slider');
var o = $('#ovulation').slider()
	.on('slide', ovulationchange)
	.data('slider');
var p = $('#period_calendar').slider()
	.on('slide', periodcalendarchange)
	.data('slider');
