import { Router } from "express";
import passport from "passport";
import { Strategy } from "passport-twitter";
import { twitterKey, twitterSecret } from "./utils/config";

passport.use(
  new Strategy(
    {
      consumerKey: twitterKey,
      consumerSecret: twitterSecret,
      callbackURL: "http://localhost:3000/auth/callback"
    },
    function passportAuthCb(token, tokenSecret, profile, done) {
      return done(null, { username: profile.username.toLowerCase() });
    }
  )
);

passport.serializeUser(function passportSerialize(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function passportDeserialize(obj, cb) {
  cb(null, obj);
});

const r: Router = Router();

r.get("/twitter", passport.authenticate("twitter"));

r.get(
  "/callback",
  passport.authenticate("twitter", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

export default r;
