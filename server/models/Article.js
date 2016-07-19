/**
 * Created by nick on 7/15/16.
 */

'use strict';

const constructor = (modelsStorage) => {
   // Dependencies
   const restful = require('node-restful');
   const mongoose = require('mongoose');
   const ObjectId = mongoose.Schema.Types.ObjectId;
   
   // Article Schema
   const articleSchema = new mongoose.Schema({
      title : {
         type: String,
         required: true
      },
      body : {
         type: String,
         required: true
      },
      creator: {
         type: ObjectId,
         ref: 'User',
         required: true
      }
   });

   const addCreator = (req, res, next) => {
      req.body.creator = req.user.id;
      next();
   };
   
   // Article model
   const Article = new restful.model(
      "Article",
      articleSchema
   )
      .methods([
         'delete',
         { method: 'post', before: addCreator },
         { method: 'put', before: addCreator }
      ]);
   
   // Export Model
   modelsStorage.Article = Article;
};

module.exports = constructor;