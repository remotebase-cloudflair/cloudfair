import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import {OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import session from 'express-session';
import passport from 'passport';

const app = express();
config();
var userProfile;

const PORT = process.env.PORT || 8080;
//express oauth session
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET' 
  }));

  //passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

  /*  Google AUTH  */
  
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));

app.use(cors());
app.use(express.json());
app.use(cookieParser())

//Prefix all routes with api
app.get("/api", (req,res) => {
    res.send("Hello World! from Api");
})
app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });




app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}/api`);
})

// https://www.loginradius.com/blog/engineering/google-authentication-with-nodejs-and-passportjs/