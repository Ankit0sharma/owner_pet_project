const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Person = require("../models/person.model");

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
  try {
    // Find the person based on the user ID in the JWT payload
    const person = await Person.query().findById(jwtPayload.userId);
    if (!person) {
      return done(null, false);
    }
    return done(null, person);
  } catch (error) {
    return done(error, false);
  }
});

passport.use(jwtStrategy);
