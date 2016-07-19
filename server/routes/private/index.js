/**
 * Created by nick on 7/6/16.
 */

// Dependencies
const express = require('express');
const router = express.Router();

const users = require('./usersRouter');
const articles = require('./articlesRouter');

// Routes
router.use(users.baseUrl, users.router);
router.use(articles.baseUrl, articles.router);

// Export router
module.exports = {
   baseUrl : '/private',
   router : router
};