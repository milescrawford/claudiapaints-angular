var cpDirectives = angular.module('cpDirectives', []);

cpDirectives.directive('galleryCategory', function() {
	return {
		restrict: 'E',
		scope: { categoryInfo: '='},
		templateUrl: 'partials/directives/galleryCategory.html'
	};
});

cpDirectives.directive('galleryPainting', function() {
	return {
		restrict: 'E',
		scope: { paintingInfo: '='},
		templateUrl: 'partials/directives/galleryPaintings.html'
	};
});