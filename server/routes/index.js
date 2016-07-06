/**
 * Created by nick on 7/6/16.
 */

// Dependencies
const express = require('express');
const router = express.Router();

const auth = require('./authRouter');
const api = require('./api/index');

const middlewares = require('../middlewares/index');

// Routes
router.use(auth.baseUrl, auth.router);
router.use(api.baseUrl, api.router);//TODO add auth middleware

const controllers = require('../controllers/index');
router.get('/tmp', controllers.Cntrl);//TODO delete

// Export router
module.exports = {
   baseUrl : '/',
   router : router
};