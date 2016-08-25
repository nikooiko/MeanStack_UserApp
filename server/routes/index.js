/**
 * Created by nick on 7/6/16.
 */

// Dependencies
const express = require('express');
const router = express.Router();

const _public = require('./public/index');
const _private = require('./private/index');

const middlewares = require('../middlewares/index');

// Routes
   //public
router.use(_public.baseUrl, _public.router);

   //private
router.use(_private.baseUrl, middlewares.auth, _private.router);

// Error handlers
router.use(middlewares.errorHandlers.auth);

// Export router
module.exports = {
   baseUrl : '/api',
   router : router
};