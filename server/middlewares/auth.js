/**
 * Created by nick on 7/14/16.
 */

'use strict';

const authMiddleware = (req, res, next) => {
   console.log('AuthMiddleware: Is authenticated:' + req.isAuthenticated());
   if(!req.isAuthenticated()) {
      const err = new Error('AuthMiddleware: User not authenticated!');
      err.status = 401;
      return next(err);
   }
   return next();
};

module.exports = authMiddleware;