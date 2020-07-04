/*
Common JS Lib

author: Ayrlin Renata
*/

$(document).ready(function() {
	initListeners();
});

function initListeners() {
	$('.collapse-row').click(function() {
		doUncollapse(this);
	}).find('.body-row').click(function() {
		return false;
	});
	$('.collapse-arrow').click(function() {
		doCollapse(this.closest('.collapse-row'));
	});
}

function doUncollapse(ele) {
	$(ele).find('.body-row').css("display","block");
	$(ele).find('.collapse-header').css("display","none");
}

function doCollapse(ele) {
	$(ele).find('.body-row').css("display","none");
	$(ele).find('.collapse-header').css("display","block");
}