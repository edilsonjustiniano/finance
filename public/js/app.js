angular.module('FinanceApp', ['ngRoute', 'restangular'])
.config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
    $routeProvider.when('/payments', {
        templateUrl: 'views/paymentList.html',
        controller: 'PaymentListController'
    }).
    when('/payment/:idContato', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentController'
    }).
    when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentController'
    }).
    when('/creditCards', {
        templateUrl: 'views/creditCards.html',
        controller: 'CreditCardListController'
    }).
    when('/creditCard', {
        templateUrl: 'views/creditCard.html',
        controller: 'CreditCardController'
    }).
    when('/creditCard/:idCreditCard', {
        templateUrl: 'views/creditCard.html',
        controller: 'CreditCardController'
    });
    $routeProvider.otherwise({redirectTo: '/payments'});


    //set the base url for api calls on our RESTful services
    var newBaseUrl = "";
    if (window.location.hostname == "localhost") {
        newBaseUrl = "http://localhost:3000/";
    } else {
        var newBaseUrl = window.location.href.substring(0, window.location.href);
    }

    RestangularProvider.setBaseUrl(newBaseUrl);
}]);
