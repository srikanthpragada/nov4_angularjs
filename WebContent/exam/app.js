'use strict';

var app = angular.module('exam', []);

app.controller("ExamController",

    function ($scope, $http, $log) {
        $scope.question = {};
        var config = {
            method: 'get',
            url: 'questions.json'
        };

        $scope.takeExam = function () {
            $http(config).
                  success(function (data) {
                      $scope.progress = true;
                      $scope.questions = data;
                      $scope.length = data.length;
                      $scope.pos = 0;
                      $scope.correctCount = 0;
                      $scope.question = $scope.questions[$scope.pos];
                  }).
                   error(function (data, status, headers, config) {
                       $log.info('Error --> ' + data);
                       $scope.error = status;
                   });
        }


        //  functions
        $scope.next = function () {
            if ($scope.pos == $scope.length - 1)
                return;

            $scope.pos++;
            $scope.question = $scope.questions[$scope.pos];
        }

        $scope.prev = function () {
            if ($scope.pos == 0)
                return;

            $scope.pos--;
            $scope.question = $scope.questions[$scope.pos];
        }

        $scope.isFirst = function () {
            return $scope.pos == 0;
        }

        $scope.isLast = function () {
            return $scope.pos == $scope.length - 1;
        }

        $scope.process = function () {
            // take confirmation from user
            var res = confirm("Do you really want to examination and ")
            $scope.correctCount = 0;
            for (var idx in $scope.questions) {
                var q = $scope.questions[idx];
                if (q.ans == q.cans)
                    $scope.correctCount++;
            }

            if ($scope.correctCount >= $scope.length / 2)
                $scope.result = "Passed";
            else
                $scope.result = "Failed";

            $scope.progress = false;
        }

        $scope.takeExam(); 

    }
);
