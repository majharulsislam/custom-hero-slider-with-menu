(function( $ ) {
	"use strict";

	jQuery(document).ready(function(){
	  $(".owl-carousel.hero_slider_area").owlCarousel({
	  	items:1,
	  	autoplay:true,
	  	autoplayTimeout: 3000,
	  	autoplayHoverPause:true,
	  	loop:true,
	  	nav:false,
	  	dots:true,
	  });
	});

}(jQuery));
