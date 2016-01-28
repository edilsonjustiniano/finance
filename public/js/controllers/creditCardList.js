angular.module('FinanceApp')
.controller('CreditCardListController', ['$scope', 'CreditCardService', function($scope, CreditCardService) {

    $scope.findAll = function() {
        CreditCardService.findAll().then($scope.successGetCreditCards, $scope.error);
    };

    $scope.update = function(creditCard) {
        if (creditCard._id) {
            
        }
    };

    $scope.delete = function(creditCard) {
        if (creditCard._id) {
            console.log(creditCard);
        }
    };

    /* Callbacks */
    $scope.successGetCreditCards = function(response) {
        $scope.creditCards = response;
    };

    $scope.error = function(error) {
        console.error(error);
    };

    $scope.findAll();

}]);
