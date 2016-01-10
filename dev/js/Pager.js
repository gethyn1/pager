"use strict";
var App = App || {};

App.Pager = function(options) {

	this.viewport = $(options.viewport);
	this.pages = $(options.pages);

	var _this = this;

	var currentPageRef;

	this.init = function() {

		// Set current page
		currentPageRef = 0;

		// Add page references
		this.pages.each(function(i) {
			$(this).attr('data-ref', i);
		});

		// Add classes
		this.viewport.addClass('pg-viewport');
		this.pages.addClass('pg-page');
		this.pages.first().addClass('pg-is-active');

		this.userInteractions();

	};

	this.userInteractions = function() {

	};

	this.slideToPrev = function() {
		// console.log('Prev');
		this.slideToPage(currentPageRef - 1, 'right');
	};

	this.slideToNext = function() {
		// console.log('Next');
		this.slideToPage(currentPageRef + 1, 'left');
	};

	this.slideToPage = function(ref, direction) {
		
		// Update ref if required
		if(ref < 0) {
			ref = this.pages.length - 1;
		} 
		else if(ref > this.pages.length - 1) {
			ref = 0;
		}

		// Set current / next page
		var currentPage = this.pages.filter('[data-ref="' + currentPageRef + '"]'),
			nextPage = this.pages.filter('[data-ref="' + ref + '"]')
			direction;
		
		// Update classes
		currentPage.css({
			transform: 'translateX(-50%)',
			opacity: 0,
			transition: 'all .5s ease'
		});

		setTimeout(function() {
			currentPage.css({
				transform: 'translateX(0)',
				transition: 'none'
			}).removeClass('pg-is-active');

			nextPage.css({
				opacity: '0',
				transform: 'translateX(50%)'
			})
			.addClass('pg-is-active');
			
			setTimeout(function() {
				nextPage.css({
					transform: 'translateX(0)',
					transition: 'all .5s ease',
					opacity: '1'
				});
			}, 100);
		}, 500);

		// Update current page ref
		currentPageRef = ref;
	};
};