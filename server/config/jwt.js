const { User } = require("../models/user");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
require("dotenv").config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

const jwtStrategy = new JwtStrategy(options, async function (payload, done) {
  try {
    const user = await User.findOne({ _id: payload.id }).lean();
    if (!user) {
      return done(new Error("User not found."));
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

module.exports = jwtStrategy;
