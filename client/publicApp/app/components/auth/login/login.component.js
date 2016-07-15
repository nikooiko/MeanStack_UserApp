/**
 * Created by nick on 7/13/16.
 */

'use strict';

class LoginController{
   constructor($window, $http){
      this.$window = $window;
      this.$http = $http;
      this.credentials = {
         username: '',
         password: ''
      };
   }
   
   login(credentials){
      return this.$http
         .post('api/public/auth/login', credentials)
         .then( (res) => {
            //Success
            this.$window.location.href = '/profile';
            console.log('User logged in');
         }, (res) => {
            //Fail
            alert('Login Failed');
            console.log('User Login failed');
         });
   }
}

angular.module('login')
   .component('auth.login', {
      templateUrl: root + 'app/components/auth/login/login.template.html',
      controller: [
         '$window', '$http',
         ($window, $http) => new LoginController($window, $http)]
   });