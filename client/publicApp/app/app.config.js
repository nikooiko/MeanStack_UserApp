/**
 * Created by nick on 7/13/16.
 */

'use strict';

const root = 'publicApp/';

angular.module('publicApp')
   .config([
      '$stateProvider', '$urlRouterProvider', '$locationProvider',
      ($stateProvider, $urlRouterProvider, $locationProvider) => {

         $urlRouterProvider.otherwise('/auth/login');

         $locationProvider.html5Mode(true);  //Remove the # from the URL's

         $stateProvider
            .state('auth', {
               abstract : true,
               url : '/auth',
               templateUrl : root + 'app/components/auth/auth.template.html'
            })
            .state('auth.login', {
               url : '/login',
               component : 'auth.login'
            })
            .state('auth.register', {
               url : '/register',
               component : 'auth.register'
            })
      }
   ]);