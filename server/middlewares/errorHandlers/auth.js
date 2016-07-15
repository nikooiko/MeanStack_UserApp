/**
 * Created by nick on 7/14/16.
 */

'use strict';

const authErrorHandler = (err, req, res, next) => {
   return res.status(err.status || 500).send(err);
};


module.exports = authErrorHandler;