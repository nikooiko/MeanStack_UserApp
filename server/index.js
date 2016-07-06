/**
 * Created by nick on 7/6/16.
 */
// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const _ = require('lodash');

const routes = require('./routes/index');

// MongoDB
mongoose.connect('mongodb://localhost/user_app', (err) => {
   if(err){
      console.error(err, 'Error while connecting to mongoDB');
   }
   else{
      console.log('Successful connection to mongoDB');
   }
});

// Express initialization
const app = module.exports = express();

// Express Middlewares
{
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(bodyParser.json());
   app.use(cors());
   app.use(session({
      secret: 'keyboard cat',//TODO change
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }//TODO change to true
   }));//TODO recheck
   app.use(passport.initialize());
   app.use(passport.session());
   app.use(flash());
}

// Routes
app.use(routes.baseUrl, routes.router);

// Serve Client
app.use('/public', express.static('../client'));
app.all("/*", function(req, res) {
   res.sendFile("index.html", { root: __dirname + "/../client/" });
});

// Start Server
mongoose.connection.once('open', () => {
   //Listen 3000
   app.listen(3000);
   console.log('Listening on port 3000...');
});

