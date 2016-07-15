/**
 * Created by nick on 7/14/16.
 */

'use strict';

// Controllers
const logout = (req, res) => {
   if(req.isAuthenticated()){
      console.log('Was Logged.\nNow:Logged out');
   }
   else{
      console.log('Wasn\'t Logged.\n Now:Logged out');
   }
   req.logout();
   return res.sendStatus(200);
};
const login = (req, res) => {
   let user = {
      id : req.user._id
   };
   const data = {
      user : user
   };
   console.log('Logged in');
   return res.status(200).json(data);
};

module.exports = {
   login,
   logout
};