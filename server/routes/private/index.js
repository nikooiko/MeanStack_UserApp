/**
 * Created by nick on 7/6/16.
 */

// Dependencies
const express = require('express');
const router = express.Router();

const users = require('./usersRouter');

// Routes
router.use(users.baseUrl, users.router);

// Export router
module.exports = {
   baseUrl : '/private',
   router : router
};