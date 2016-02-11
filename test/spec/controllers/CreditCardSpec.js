describe('CreditCard Controller', function() {

    var scope,
        controller;

    beforeEach(function() {
        module('FinanceApp');
        inject(function(_$rootScope_, $controller) {
            scope = _$rootScope_.$new();
            controller = $controller('CreditCardController', {
                $scope: scope,
                creditCard: {}
            });
        });
    });

    it('should create a credit card empty', inject(function($controller) {
        $controller('CreditCardController', {
            "$scope": scope,
            "creditCard": {}
        });

        expect(scope.creditCard._id).toBeUndefined();
    }));
});
