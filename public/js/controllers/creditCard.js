angular.module('FinanceApp')
.controller('CreditCardController', ['$scope', '$routeParams', 'CreditCardService', function($scope, $routeParams, CreditCardService) {

    $scope.days = [];
    $scope.idCreditCard = $routeParams.idCreditCard || undefined;

    //initialize material ui
    setTimeout(function() {
        $('select').material_select();
    });

    $scope.loadDays = function() {
        for(var i =1; i <=31; i++) {
            $scope.days.push(i);
        }
    };

    $scope.loadDays();

    $scope.cancel = function() {
    }

    $scope.saveCreditCard = function() {
        CreditCardService.saveCreditCard($scope.creditCard).then($scope.successSaved, $scope.error);
    };

    $scope.successSaved = function(response) {
        console.log(response);
    };

    $scope.error = function(error) {
        console.error(error);
    };
}]);
