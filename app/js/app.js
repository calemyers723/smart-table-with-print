'use strict';

/* App Module */

var smartTableApp = angular.module('smartTableApp', [
  'ngRoute',
  'smarttableControllers'
]);

smartTableApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/smart-table', {
        templateUrl: 'partials/smart-table.html',
        controller: 'SmartTableCtrl'
      }).
      otherwise({
        redirectTo: '/smart-table'
      });
  }]);
