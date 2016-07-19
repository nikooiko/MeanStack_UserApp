/**
 * Created by nick on 7/13/16.
 */

'use strict';

class RegisterController{
   constructor($state, $http){
      this.$state = $state;
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
            this.$state.go('auth.login');
            console.log('User Registration was Successful');
         }, (res) => {
            //Fail
            alert('registration failed');
            console.log('User Registration failed');
         });
   }
}

angular.module('register')
   .component('auth.register', {
      templateUrl: root + 'app/components/auth/register/register.template.html',
      controller: [
         '$state', '$http',
         ($state, $http) => new RegisterController($state, $http)]
   });
