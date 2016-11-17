var app = angular.module("books", []);
// controller 
var BooksController = function ($scope, $http) {
    var onSuccess = function (data) {
        $scope.books = data.data;
        //alret($scope.books.length)
    };
    var onError = function (error) {
        $scope.result = error;
        // alert("Error");
    };

    $http.get("books.json").then(onSuccess,onError);
};

app.controller("BooksController", BooksController);