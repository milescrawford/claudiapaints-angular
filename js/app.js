var app = angular.module('claudiaPaints', [
  'ngRoute',
  'cpControllers',
  'cpDirectives',
  'cpServices',
  'cpAnimations'
  ]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'Home'
      }).
      when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'GalleryList'
      }).
      when('/gallery/:category', {
        templateUrl: 'partials/category.html',
        controller: 'Paintings'
      }).
      when('/gallery/paintings/:painting', {
        templateUrl: 'partials/painting.html',
        controller: 'PaintingDetail'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'About'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'Contact'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

