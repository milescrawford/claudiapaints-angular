var cpControllers = angular.module('cpControllers', []);

cpControllers.controller('Home', ['$scope',
	function($scope) {
	    $(".home-link").click(function(event) {
	        scroll(0,0);
	        $(".navbar-collapse").collapse('hide');
		});
	}]);

cpControllers.controller('About', ['$scope',
	function($scope) {
		$(".about-container").fadeIn(1000);
	}]);

cpControllers.controller('Contact', ['$scope',
	function($scope) {
		$(".contact-container").fadeIn(1000);
	}]);

cpControllers.controller('GalleryList', ['$scope', 'Categories',
	function($scope, Categories) {
		$scope.categories = Categories.query();
	}]);

cpControllers.controller('Paintings', ['$scope', '$routeParams', 'Paintings',
	function($scope, $routeParams, Paintings) {
		$scope.paintings = Paintings.get({category: $routeParams.category});
	}]);

cpControllers.controller('PaintingDetail', ['$scope', '$routeParams', '$http', 
	'$filter', 'Painting', 
	function($scope, $routeParams, $http, $filter, Painting) {

		$http({
  			method: 'GET',
  			url: '/URI_OF_JSON_FILE_FIXME'
		}).then(function successCallback(response) {
    			// this callback will be called asynchronously
    			// when the response is available
    			
    			// TODO: docs say that if a 'json type is detected' it will automatically
    			// be inflated to an Object in the 'data' field, but i'm not 100% sure that
    			// this particular request will be autodetected as JSON
    			$scope.painting = $filter('filter')(response.data.paintings, {filename: $routeParams.painting})[0];

			if ($scope.painting.notes != "") {
				$scope.notes = true
			} else {
				$scope.notes = false
			}
			if ($scope.painting.location != "") {
				$scope.location = true
			} else {
				$scope.location = false
			}
    			
    			
  		}, function errorCallback(response) {
    			// called asynchronously if an error occurs
    			// or server returns response with an error status.
    			alert('knickers!');
  		});
		
	}
	
	]);

	
