/**
 * Created by nick on 7/6/16.
 */
const express = require('express');
const router = express.Router();

// Models
const models = require('../../models/index');

// Routes
models.User.methods(['get', 'put', 'delete']);
models.User.register(router, '');

router.get('/showLoggedInUser', (req, res) => {
   const data = {
      user: {
         username : req.user.username,
         password :req.user.password,
         email : req.user.email,
         id : req.user.id
      }
   };
   res.json(data);
});

module.exports = {
   baseUrl : '/users',
   router : router
};