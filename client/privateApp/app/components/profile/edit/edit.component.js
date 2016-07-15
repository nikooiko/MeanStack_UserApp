/**
 * Created by nick on 7/13/16.
 */

'use strict';

class EditController{
   constructor($http){
      this.$http = $http;
      this.getUserProfile().then(() => {
         this.credentials = {};
         this.credentials.username = this.user.username;
         this.credentials.password = this.user.password;
         this.credentials.email = this.user.email;
      });
   }
   
   updateUserProfile(credentials){
      console.log('UserId:' + this.user.id);
      console.log('Username:' + credentials.username);
      console.log('Password:' + credentials.password);
      console.log('Email:' + credentials.email);

      return this.$http
         .put('/api/private/users/' + this.user.id, credentials)
         .then(() => {
            alert('Updated');
         });
   }

   getUserProfile(){
      return this.$http
         .get('/api/private/users/showLoggedInUser')
         .then( (res) => {
            this.user = res.data.user;
         });
   }
}

angular.module('edit')
   .component('profile.edit', {
      templateUrl: root + 'app/components/profile/edit/edit.template.html',
      controller: [
         '$http',
         ($http) => new EditController($http)]
   });