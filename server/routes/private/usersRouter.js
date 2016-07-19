/**
 * Created by nick on 7/6/16.
 */
const express = require('express');
const router = express.Router();

// Models
const models = require('../../models/index');

// Controllers
const controllers = require('../../controllers/index');

// Routes
models.User.methods([
   'get',
   'put',
   'delete'
]);

models.User.register(router, '');

router.get('/showLoggedInUser', controllers.users.showLoggedInUser);
router.get('/getLoggedInUserArticles', controllers.users.getLoggedInUserArticles);
router.get('/:id/articles', controllers.users.getUserArticles);


module.exports = {
   baseUrl : '/users',
   router : router
};