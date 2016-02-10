angular.module('FinanceApp')
.factory('CreditCardService', ['CreditCardRestService', function(CreditCardRestService){

    var service = {};

    service.findAll = function() {
        return CreditCardRestService.findAll();
    };

    service.saveCreditCard = function(creditCard) {
        return CreditCardRestService.save(creditCard);
    };

    service.get = function(creditCardId) {
        return CreditCardRestService.get(creditCardId);
    }

    return service;
}])
