/**
 * Created by nick on 7/18/16.
 */

'use strict';

class ShowMyArticlesController{
   constructor($http){
      this.$http = $http;
      this.getAllArticles();
   }
   
   getAllArticles(){
      return this.$http
         .get('/api/private/users/getLoggedInUserArticles')
         .then( (res) => {
            this.articles = res.data;
         });
   }

   deleteArticle(articleId, index){
      return this.$http
         .delete('/api/private/articles/' + articleId)
         .then(() => {
            this.articles.splice(index, 1);
            alert('Article Deleted');
         });
   }
}

angular.module('articles.showMine')
   .component('articles.showMine', {
      templateUrl: root + 'app/components/articles/showMine/showMine.template.html',
      controller: [
         '$http',
         ($http) => new ShowMyArticlesController($http)]
   });