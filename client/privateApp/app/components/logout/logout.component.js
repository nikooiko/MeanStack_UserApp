/**
 * Created by nick on 7/15/16.
 */

'use strict';

class LogoutController{
   constructor($http, $window){
      this.$http = $http;
      this.$window = $window
   }

   logout(){
      return this.$http.get('api/public/auth/logout')
         .then(() => { //Success
            console.log('Logout Succeed');
            this.$window.location.href = '/auth/login';
         }, () => { //Fail
            console.log('Logout Failed');
            this.$window.location.href = '/auth/login';
         });
   }
}

angular.module('privateApp')
   .component('logout', {
      templateUrl: root + 'app/components/logout/logout.template.html',
      controller: [
         '$http', '$window',
         ($http, $window) => new LogoutController($http, $window)
      ]
   });