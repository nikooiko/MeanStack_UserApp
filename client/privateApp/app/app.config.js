/**
 * Created by nick on 7/14/16.
 */

'use strict';

const root = 'privateApp/';

angular.module('privateApp')
   .config([
      '$httpProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider',
      ($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) => {
         $httpProvider.interceptors.push('AuthInterceptor');

         $urlRouterProvider.otherwise('/profile');

         $locationProvider.html5Mode(true);  //Remove the # from the URL's

         $stateProvider
            .state('profile', {
               abstract : true,
               url : '/profile',
               views : {
                  'header' : {
                     component : 'logout'
                  },
                  'body' : {
                     templateUrl : root + 'app/components/profile/profile.template.html'
                  }
               }
            })
            .state('profile.show', {
               url : '',
               component : 'profile.show'
            })
            .state('profile.edit', {
               url : '/edit',
               component : 'profile.edit'
            })
      }
   ]);