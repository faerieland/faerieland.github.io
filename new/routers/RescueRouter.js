//var BASE_PATH = 'http://192.168.1.109:8087/';
var BASE_PATH = 'http://localhost:80/';
var BASE_PATH = 'http://faerielandrescue.org';

var RescueApp = angular.module('RescueApp', ['ngResource','ngRoute', 'ngCookies']);

	RescueApp.config(function($locationProvider, $routeProvider){
		$locationProvider.html5Mode(true);
		
		$routeProvider.when('/',{
			templateUrl:'../views/home.html',
			//controller: 'PortfolioAppController'
		}).

		// About Our Rescue Routes

		when('/about_our_rescue',{
			templateUrl:'../views/about_our_rescue/index.html',
			//controller: 'PortfolioAppController'
		}).
		when('/about_our_rescue/board_of_directors',{
			templateUrl:'../views/about_our_rescue/board_of_directors.html',
			//controller: 'PortfolioAppController'
		}).
		
		// Our Rescue Dogs Routes

		when('/our_rescue_dogs',{
			templateUrl:'../views/our_rescue_dogs/index.html',
			//controller: 'PortfolioAppController'
		}).
		when('/our_rescue_dogs/adoptable_dogs',{
			templateUrl:'../views/our_rescue_dogs/adoptable_dogs.html',
			//controller: 'PortfolioAppController'
		}).
		when('/our_rescue_dogs/forever_home_dogs',{
			templateUrl:'../views/our_rescue_dogs/forever_home_dogs.html',
			//controller: 'PortfolioAppController'
		}).
		when('/our_rescue_dogs/rainbow_bridge_dogs',{
			templateUrl:'../views/our_rescue_dogs/rainbow_bridge_dogs.html',
			//controller: 'PortfolioAppController'
		}).

		// Events Routes

		when('/events',{
			templateUrl:'../views/events/index.html',
			//controller: 'PortfolioAppController'
		}).
		when('/events/event',{
			templateUrl:'../views/events/event.html',
			//controller: 'PortfolioAppController'
		}).

		// Helping Us Routes

		when('/helping_us',{
			templateUrl:'../views/helping_us/index.html',
			//controller: 'PortfolioAppController'
		}).
		when('/helping_us/fostering',{
			templateUrl:'../views/helping_us/fostering.html',
			//controller: 'PortfolioAppController'
		}).

		// Legal Routes

		when('/terms_of_service',{
			templateUrl:'../views/tos.html',
			//controller: 'PortfolioAppController'
		}).
		
		when('/privacy_policy',{
			templateUrl:'../views/privacy_policy.html',
			//controller: 'PortfolioAppController'
		}).

		// Admin Interface 

		when('/privacy_policy',{
			templateUrl:'../views/privacy_policy.html',
			//controller: 'PortfolioAppController'
		}).

		otherwise({
			redirectTo: '/'
		});	
	});
	