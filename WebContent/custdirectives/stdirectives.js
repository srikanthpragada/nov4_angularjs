var app = angular.module('stDirectives', [])
.controller('Controller', ['$scope', function ($scope) {
    $scope.today = new Date().toString();
    $scope.name = "Srikanth Technologies"
}]);

app.directive('stAddress',
 function () {
	  return {
			restrict : 'E', 
		    template: '{{ name }} 905905700 ,  srikanth_technologies@yahoo.com'
		  };
  } // function
); // end of directive



app.directive('stToday', function () {
    return {
          restrict: 'E',
          template: 'Today is : {{today}}'
    };
}
);


app.directive('stNow', function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            element.text(new Date());
        }
    };
});


app.directive('stTitle', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude :true,
            template:  "<h1 class='title'><span ng-transclude></span></h1>"
        };
})

app.directive('stCode', function () {
    return {
        restrict: 'EA',
        transclude: true,
        replace :true,
        template : '<pre ng-transclude></pre>'
    };
});

