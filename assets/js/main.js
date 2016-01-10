"use strict";
var App = App || {};

$(document).ready(function() {

	console.log('jQuery is loaded');

	// Initialise share highlighter
    var pager = new App.Pager({
    	viewport: 'div.page-viewport',
    	pages: 'div.page-section'
    });

    pager.init();

    // Nav controls
    $('[data-js="pager-nav"]').on('click', function() {
    	if($(this).data('dir') === 'prev') {
    		pager.slideToPrev();
    	} else {
    		pager.slideToNext();
    	}
    	return false;
    });
});