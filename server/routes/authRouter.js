/**
 * Created by nick on 7/6/16.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Models
const models = require('../models/index');

// Passport
passport.serializeUser((user, done) => {
   done(null, user.id);
});
passport.deserializeUser((id, done) => {
   models.User.findById(id, (err, user) => {
      if(err){
         return done(err);
      }
      return done(null, user);
   });
});
passport.use('local-login', new LocalStrategy( (username, password, done) => {
   models.User.findOne({username}, (err, user) => {
      if (err) {
         // console.log('Error:' + err);
         return done(err);
      }
      if (!user) {
         // console.log('User  not found');
         return done(null, false, {message: 'Unknown User ' + username});
      }
      else if (user.password != password){
         // console.log('Wrong password');
         return done(null, false, { message: 'Wrong password'});
      }
      else{
         // console.log('successful: ' + username);
         return done(null, user);
      }
   });
}));

router.get('/logout', (req, res) => {
   console.log('Was logged: ' + req.isAuthenticated());
   console.log('Logged out');
   req.logout();
   res.sendStatus(200);
});

router.get('/login', (req, res) => {
   res.sendfile('./login_form.html');
});

router.post('/login', passport.authenticate('local-login'), (req, res) => {
   let data = {
      id : req.user._id
   };
   console.log('Logged in');
   // res.json(data);
   res.sendStatus(200);
});

module.exports = {
   baseUrl : '/auth',
   router : router
};