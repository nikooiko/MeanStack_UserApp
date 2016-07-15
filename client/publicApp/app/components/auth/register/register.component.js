/**
 * Created by nick on 7/13/16.
 */

'use strict';

class RegisterController{
   constructor($window, $http){
      this.$window = $window;
      this.$http = $http;
      this.credentials = {
         username: '',
         password: '',
         email: ''
      };
   }

   register(credentials) {
      return this.$http
         .post('/api/public/auth/register', credentials)
         .then( (res) => {
            //Success
            this.$window.location.href = '/profile';
            console.log('User logged in');
         }, (res) => {
            //Fail
            console.log('User Login failed');
         });
   }
}

angular.module('register')
   .component('auth.register', {
      templateUrl: root + 'app/components/auth/register/register.template.html',
      controller: [
         '$window', '$http',
         ($window, $http) => new RegisterController($window, $http)]
   });
