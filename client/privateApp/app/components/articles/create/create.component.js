/**
 * Created by nick on 7/18/16.
 */

'use strict';

class CreateArticleController{
   constructor($http, $state){
      this.$http = $http;
      this.$state = $state;
   }

   createArticle(credentials){
      console.log(credentials);
      return this.$http
         .post('/api/private/articles/', credentials)
         .then((res) => {
            alert('Article Created');
            this.$state.go('app.articles.showMine');
         }, (res) => {
            alert('Failed');
         });
   }
}

angular.module('articles.create')
   .component('articles.create', {
      templateUrl: root + 'app/components/articles/create/create.template.html',
      controller: [
         '$http', '$state',
         ($http, $state) => new CreateArticleController($http, $state)]
   });