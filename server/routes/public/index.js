/**
 * Created by nick on 7/6/16.
 */

// Dependencies
const express = require('express');
const router = express.Router();

const auth = require('./authRouter');

// Routes
router.use(auth.baseUrl, auth.router);

// Export router
module.exports = {
   baseUrl : '/public',
   router : router
};