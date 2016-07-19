/**
 * Created by nick on 7/13/16.
 */

'use strict';

class EditArticleController{
   constructor($http, $state){
      this.$http = $http;
      this.$state = $state;
      this.articleId = $state.params.id;
      this.getArticle().then(() => {
         this.credentials = {};
         this.credentials.title = this.article.title;
         this.credentials.body = this.article.body;
      });
   }
   
   updateArticle(credentials){
      return this.$http
         .put('/api/private/articles/' + this.articleId, credentials)
         .then(() => {
            alert('Updated');
            this.$state.go('app.articles.showMine');
         });
   }

   getArticle(){
      return this.$http
         .get('/api/private/articles/' + this.articleId)
         .then( (res) => {
            this.article = res.data;
         });
   }
}

angular.module('articles.edit')
   .component('articles.edit', {
      templateUrl: root + 'app/components/articles/edit/edit.template.html',
      controller: [
         '$http', '$state',
         ($http, $state) => new EditArticleController($http, $state)]
   });