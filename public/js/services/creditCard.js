angular.module('FinanceApp')
.factory('CreditCardService', ['CreditCardRestService', function(CreditCardRestService){

    var service = {};

    service.findAll = function() {
        return CreditCardRestService.findAll();
    };

    service.saveCreditCard = function(creditCard) {
        return CreditCardRestService.save(creditCard);
    };

    return service;
}])
