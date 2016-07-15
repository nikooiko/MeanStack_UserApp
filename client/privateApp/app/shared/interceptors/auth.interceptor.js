/**
 * Created by nick on 7/14/16.
 */

'use strict';

class AuthInterceptor{
   constructor($window){
      this.$window = $window
   }

   responseError(res){
      console.log('Interceptor - Error');
      $window.location.href = '/auth/login';
      return res;
   }
}

angular.module('privateApp')
   .factory('AuthInterceptor', [
      '$window', ($window) => {
         return new AuthInterceptor($window);
      }
   ]);

// angular.module('privateApp')
   // .factory('authInterceptor', ['$window', ($window) => {
   //    const myInterceptor = {
   //       responseError: function(res) {
   //          console.log('Interceptor - Error');
   //          $window.location.href = 'http://' + $window.location.host + '/auth/login';
   //          return res;
   //       }
   //    };
   //
   //    return myInterceptor;
   // }]);