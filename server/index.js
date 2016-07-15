/**
 * Created by nick on 7/6/16.
 */
// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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

// Models
const models = require('./models/index');

// Passport Initializations
{
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
}

// Routes
app.get('/dummy', (req, res) => {
   res.sendStatus(200);
});

app.get('/dummyError', (req, res) => {
   res.sendStatus(401);
});

app.use(routes.baseUrl, routes.router);

// Serve Client
app.use('/node_modules/', express.static('../node_modules/'));
app.use(express.static('../client/'));

// app.all("/auth/*", (req, res) => {
//    console.log('Serving public client index for req:' + req.path);
//    res.sendFile("index.html", { root: __dirname + "/../client/publicApp/" });
// });

app.all("*", (req, res) => {
   if(req.isAuthenticated())
   {
      console.log('Serving private client index for req:' + req.path);
      res.sendFile("index.html", { root: __dirname + "/../client/privateApp/" });
   }
   else{
      console.log('Serving public client index for req:' + req.path);
      res.sendFile("index.html", { root: __dirname + "/../client/publicApp/" });
   }
});

// Start Server
mongoose.connection.once('open', () => {
   //Listen 3000
   app.listen(3000);
   console.log('Listening on port 3000...');
});

