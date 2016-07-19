/**
 * Created by nick on 7/6/16.
 */

'use strict';

const constructor = (modelsStorage) =>{
   // Dependencies
   const restful = require('node-restful');
   const mongoose = require('mongoose');
   const ObjectId = mongoose.Schema.Types.ObjectId;

   // User Schema
   const userSchema = new mongoose.Schema({
      username: {
         type: String,
         required: true,
         unique: true
      },
      password: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true
      }
   });

   // Static method to get specific user's articles
   userSchema.statics.getUserArticles = (userId) => {
      return modelsStorage.Article.find({ creator: userId}).exec();
   };

   // Instance method in order to get user's articles
   userSchema.methods.getArticles = function () {
      console.log('Searching for articles:');
      return this.constructor.getUserArticles(this.id);
   };

   // User model
   const User = new restful.model(
      'User',
      userSchema
   );
      // User methods are defined at authRouter and userRouter instead of here

   // Export Model
   modelsStorage.User = User;
};

module.exports = constructor;