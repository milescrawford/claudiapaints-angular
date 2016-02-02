var cpServices = angular.module('cpServices', ['ngResource']);

cpServices.factory('Categories', ['$resource',
	function($resource) {
		return $resource('paintings/categories.json', {}, {
			query: {method: 'GET'},
		});
	}]);

cpServices.factory('Paintings', ['$resource',
	function($resource) {
		return $resource('paintings/:category.json', {}, {
			query: {method: 'GET', params: {category:'categories'}},
		});
	}]);

cpServices.factory('Painting', ['$resource',
	function($resource) {
		return $resource('paintings/paintings.json', {}, {
			query: {method: 'GET'},
		});
	}]);