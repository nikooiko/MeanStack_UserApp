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

// router.get('/status', (req, res) => {
//    console.log('checking status, status=' + req.isAuthenticated());
//    let user = null;
//    if (req.isAuthenticated()) {
//       user = {
//          id : req.user.id
//       };
//    }
//    const data = {
//       user : user
//    };
//    return res.status(200).json(data);
// });

module.exports = {
   baseUrl : '/auth',
   router : router
};