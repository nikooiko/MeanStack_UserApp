/**
 * Created by nick on 7/18/16.
 */

'use strict';

const models = require('../models/index');

// Controllers
const showLoggedInUser = (req, res) => {
   const data = {
      user: {
         username : req.user.username,
         password :req.user.password,
         email : req.user.email,
         id : req.user.id
      }
   };
   res.json(data);
};

const getLoggedInUserArticles = (req, res) => {
   models.User.getUserArticles(req.user.id).then((articles) => {
      res.send(articles);
   }).catch((err) => {
      throw err;
   });
};

const getUserArticles = (req, res) => {
   models.User.getUserArticles(req.params.id).then((articles) => {
      res.send(articles);
   }).catch((err) => {
      throw err;
   });
};

module.exports = {
   getLoggedInUserArticles,
   getUserArticles,
   showLoggedInUser
};