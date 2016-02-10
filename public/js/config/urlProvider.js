angular.module('FinanceApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/paymentsList');

    $stateProvider
    .state('paymentsList', {
        url: '/payments',
        templateUrl:'../../views/payments/paymentList.html',
        controller: 'PaymentListController'
    })
    .state('creditCardsList', {
        url: '/creditCards',
        templateUrl:'../../views/creditCards/creditCardsList.html',
        controller: 'CreditCardListController'
    })
    .state('creditCardAdd', {
        url: '/creditCard/add',
        templateUrl: '../../views/creditCards/creditCard.html',
        controller: 'CreditCardController',
        params: {
            creditCard: undefined
        },
        resolve : {
            creditCard: function(CreditCardService, $stateParams) {
                return undefined;
            }
        }
    })
    .state('creditCardUpdate', {
        url: '/creditCard/edit',
        templateUrl: '../../views/creditCards/creditCard.html',
        controller: 'CreditCardController',
        params: {
            creditCard: null
        },
        resolve : {
            creditCard: ['CreditCardService', '$stateParams', function(CreditCardService, $stateParams) {
                return CreditCardService.get($stateParams.creditCard._id);
            }]
        }
    });

    // $routeProvider.when('/payments', {
    //     templateUrl: 'views/paymentList.html',
    //     controller: 'PaymentListController'
    // }).
    // when('/payment/:idContato', {
    //     templateUrl: 'views/payment.html',
    //     controller: 'PaymentController'
    // }).
    // when('/payment', {
    //     templateUrl: 'views/payment.html',
    //     controller: 'PaymentController'
    // }).
    // when('/creditCards', {
    //     templateUrl: 'views/creditCards.html',
    //     controller: 'CreditCardListController'
    // }).
    // when('/creditCard', {
    //     templateUrl: 'views/creditCard.html',
    //     controller: 'CreditCardController'
    // }).
    // when('/creditCard/:idCreditCard', {
    //     templateUrl: 'views/creditCard.html',
    //     controller: 'CreditCardController'
    // });
    // $routeProvider.otherwise({redirectTo: '/payments'});
}]);
