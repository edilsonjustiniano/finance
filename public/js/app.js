angular.module('FinanceApp', ['ngRoute'])
.config(function($routeProvider) {
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
    });
    $routeProvider.otherwise({redirectTo: '/payments'});
}
);
