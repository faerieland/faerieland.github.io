	RescueApp.controller("RescueAppController",["$scope","$http", "$cookies", function ($scope, $http, $cookies){
		
		$scope.Positions = [
			{"RescueID": "FLI021","RescueName" : "Front End Web Developer","datesWorked" : "August - September 2013", "description" : "As an Front End Web Developer I worked on the new versio of the Genral Mills Food Service website. http://www.generalmillsfoodservice.com"},
	 	];

	 	$scope.position = {"companyName": "Walmart","position" : "Front End Web Developer","datesWorked" : "", "description" : ""};

	}]);
	
	