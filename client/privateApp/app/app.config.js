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
            .state('app', {
               abstract : true,
               url : '',
               views : {
                  'header' : {
                     component : 'logout'
                  },
                  'body' : {
                     templateUrl: root + 'app/body.template.html',
                  }
               }
               // resolve : {
               //    user : 'CurrentUser'//TODO recheck
               // }
            })

            .state('app.profile', {
               abstract : true,
               url : '/profile',
               templateUrl : root + 'app/components/profile/profile.template.html'
            })
            .state('app.profile.show', {
               url : '',
               component : 'profile.show'
            })
            .state('app.profile.edit', {
               url : '/edit',
               component : 'profile.edit'
            })

            .state('app.articles', {
               abstract : true,
               url : '/articles',
               templateUrl : root + 'app/components/articles/articles.template.html'
            })
            .state('app.articles.showMine', {
               url : '',
               component : 'articles.showMine'
            })
            // .state('app.articles.show', {
            //    url : '/:id/show',
            //    component : 'articles.show',
            // })
            .state('app.articles.edit', {
               url : '/:id/edit',
               component : 'articles.edit'
            })
            .state('app.articles.create', {
               url : '/create',
               component : 'articles.create'
            })
      }
   ]);