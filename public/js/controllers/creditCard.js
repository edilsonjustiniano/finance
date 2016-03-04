angular.module('FinanceApp')
.controller('CreditCardController', ['$scope', 'ngToast', 'CreditCardService', 'creditCard',
function($scope, ngToast, CreditCardService, creditCard) {

    $scope.days = [];
    $scope.creditCard = creditCard || {};

    //initialize material ui
    setTimeout(function() {
        $('select').material_select();
    });

    $scope.loadDays = function() {
        for(var i =1; i <=31; i++) {
            $scope.days[i-1] = i;
        }
    };

    $scope.loadDays();

    $scope.cancel = function() {
    };

    $scope.saveCreditCard = function() {
        CreditCardService.saveCreditCard($scope.creditCard).then($scope.successSaved, $scope.error);
    };

    $scope.successSaved = function(response) {
        ngToast.create({
            className: 'success',
            content: 'Credit Card successfuly saved!',
            dismissOnTimeout: true,
            timeout: 3000
        });
    };

    $scope.error = function(error) {
        console.error(error);
    };
}]);
