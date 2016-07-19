/**
 * Created by nick on 7/18/16.
 */

'use strict';

const models = require('../models/index');

// Controllers
const getArticle = (req, res) => {
   console.log('ID = ' + req.params.id);
   models.Article
      .findById(req.params.id)
      .populate('creator', 'username')
      .exec()
      .then((article) => {
         res.send(article);
      }).catch((err) => {
         console.log('Getting Article with id= ' + req.params.id + ' Error: ' + err);
         throw err;
      });
};

const getArticles = (req, res) => {
   models.Article
      .find()
      .populate('creator', 'username')
      .exec()
      .then((articles) => {
         res.send(articles);
      }).catch((err) => {
         console.log('Getting Articles Error: ' + err);
         throw err;
      });
};

module.exports = {
   getArticles,
   getArticle
};