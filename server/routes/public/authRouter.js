/**
 * Created by nick on 7/6/16.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Models
const models = require('../../models/index');

// Controllers
const controllers = require('../../controllers/index');

// Routes
router.get('/logout', controllers.auth.logout);
router.post('/login', passport.authenticate('local-login'), controllers.auth.login);

models.User.methods(['post']);
models.User.register(router, '/register');

router.get('/login', (req, res) => {//TODO delete
   res.sendfile('./login_form.html');
});

module.exports = {
   baseUrl : '/auth',
   router : router
};