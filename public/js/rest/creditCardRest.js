angular.module('FinanceApp')
.factory('CreditCardRestService', ['Restangular', function(Restangular){

    var basePath = '/creditCard';
    var service = {
        findAll: function() {
            return Restangular.all(basePath).customGET().then(function(response) {
                return response.plain();
            });
        },
        save: function(creditCard) {
            return Restangular.one(basePath).customPOST(creditCard);
        },
        get: function(creditCardId) {
            return Restangular.one(basePath + '/' + creditCardId).get();
        }
    };

    return service;
}])
