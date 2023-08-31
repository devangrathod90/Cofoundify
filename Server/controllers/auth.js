// import jwt from "jsonwebtoken";
// import findOrCreate from 'mongoose-findorcreate';
import passport from "passport";
import User from "../models/User.js";
import { Strategy as LocalStrategy } from 'passport-local';




/* REGISTER USER */

// Register route using Passport.js for authentication
export const customStrategy = new LocalStrategy(
  {                                                               
    usernameField: "email", // Assuming email is used as the username
    passwordField: "password",
    passReqToCallback : true
  },
  async (req, email, password, done) => {
    try {

      const {firstName,lastName}=req.body;

      // Checking if a user with the provided email exists
      const existingUser = await User.findOne({ email });

      // If a user with the provided email already exists, return an error
      if (existingUser) {
        return done(null, false, { message: "Email already registered." });
      }

      // If the email is not registered, create a new user and save it
      const newUser = new User({
        username: email,
        firstName,
        lastName,
        email,
        viewedProfile: Math.floor(Math.random() * 10000),
        impressions: Math.floor(Math.random() * 10000),
      });

      // Register the user with the password (automatically hashed)
      await User.register(newUser, password);

      return done(null, newUser); // Return the newly created user
    } catch (err) {
      return done(err);
    }
  }
)

export const register = async (req, res, next) => {
  passport.authenticate("custom", (err, user, info) => {
    if (err) {
      console.error("Passport Error:", err);
      return res.status(500).json({ error: err.message });
    }

    if (!user) {
      return res.status(400).json({ message: info.message });
    }

    console.log("Registered User:", user);
    // // Log the user in after successful registration
    // req.login(user, (err) => {
    //   if (err) {
    //     console.error("Passport Error:", err);
    //     return res.status(500).json({ error: err.message });
    //   }

    //   // Return the saved user object as the response
    //   res.status(201).json(user);
    // });
  })(req, res, next);
}



/* LOGGING IN */
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email: email });
//     if (!user) return res.status(400).json({ msg: "User does not exist. " });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//     delete user.password;
//     res.status(200).json({ token, user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

export const login = async (req, res) => {
  // console.log(req.body); // Log the request body

  const user = await User.findOne({
    username: req.body.email,
  });

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  req.login(user, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Login error' });
    }
    else {
      passport.authenticate("local")(req, res, function() {         // here i have used "local" strategy for authentication b/s "custom" was not working,that strategy is only for register the user
        console.log('Passport authenticate callback executed');
        const user = req.user;
        console.log({ user: user });
      });
    }

    return res.json({ user });
  });
};

