angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.myCauses', {
    url: '/mycauses',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myCauses.html',
        controller: 'myCausesCtrl'
      }
    }
  })

  .state('discover', {
    url: '/discover',
    templateUrl: 'templates/discover.html',
    controller: 'discoverCtrl'
  })

  .state('deposit', {
    url: '/page6',
    templateUrl: 'templates/deposit.html',
    controller: 'depositCtrl'
  })

  .state('menu.account', {
    url: '/account',
    views: {
      'side-menu21': {
        templateUrl: 'templates/account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('rewards', {
    url: '/rewards',
    templateUrl: 'templates/rewards.html',
    controller: 'rewardsCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('refer', {
    url: '/refer',
    templateUrl: 'templates/refer.html',
    controller: 'referCtrl'
  })

  .state('support', {
    url: '/support',
    templateUrl: 'templates/support.html',
    controller: 'supportCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('alternateSignup', {
    url: '/backup',
    templateUrl: 'templates/alternateSignup.html',
    controller: 'alternateSignupCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/mycauses')

  

});