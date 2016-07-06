/**
 * Created by nick on 7/6/16.
 */
const express = require('express');
const router = express.Router();

// Models
const models = require('../../models/index');

// Routes
models.User.methods(['get', 'post', 'put', 'delete']);
models.User.register(router, '');

router.get('/create', (req, res) => {
   res.sendfile('./createUser_form.html');
});

module.exports = {
   baseUrl : '/users',
   router : router
};