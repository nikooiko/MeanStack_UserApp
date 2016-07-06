const rootUrl = require('../routes/index').baseUrl;
const authUrl = require('../routes/authRouter').baseUrl;

const authMiddleware = (req, res, next) => {
   console.log('Is authenticated:' + req.isAuthenticated());
   if(!req.isAuthenticated()) {
      console.log(rootUrl + authUrl + '/login');
      res.redirect('/auth/login');
   }
   next();
};


module.exports = {
   authMiddleware
};