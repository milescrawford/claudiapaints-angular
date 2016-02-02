var cpAnimations = angular.module('cpAnimations', ['ngAnimate']);

cpAnimations.animation('.page-container', function() {

	var pageFadeIn = function(element, done) {
		element.css({
	      display: 'none'
    	});
	};

	return {
		pageFadeIn
	};
});