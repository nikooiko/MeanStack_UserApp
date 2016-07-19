/**
 * Created by nick on 7/15/16.
 */

'use strict';

// Dependencies
const express = require('express');
const router = express.Router();

// Controllers
const controllers = require('../../controllers/index');

// Models
const models = require('../../models/index');

// Routes
models.Article.register(router, '');

router.get('/', controllers.articles.getArticles);
router.get('/:id', controllers.articles.getArticle);

module.exports = {
   baseUrl : '/articles',
   router : router
};