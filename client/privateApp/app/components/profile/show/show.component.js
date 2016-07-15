/**
 * Created by nick on 7/13/16.
 */

'use strict';

class ShowController{
   constructor($http){
      this.$http = $http;
      this.id = 'empty';
      this.getUserProfile();
   }
   
   getUserProfile(){
      return this.$http
         .get('/api/private/users/showLoggedInUser')
         .then( (res) => {
            this.user = res.data.user;
         });
   }
}

angular.module('show')
   .component('profile.show', {
      templateUrl: root + 'app/components/profile/show/show.template.html',
      controller: [
         '$http',
         ($http) => new ShowController($http)]
   });