import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
// import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/users.js";
// import postRoutes from "./routes/posts.js";
import {  customStrategy, register ,login} from "./controllers/auth.js";

// import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
// import Post from "./models/Post.js";

import session from "express-session";
import passport from "passport";
import passportLocal  from "passport-local";

// import passportLocalMongoose from "passport-local-mongoose";
// import GoogleStrategy from ('passport-google-oauth20').Strategy;


/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use(session({
    secret:"this is my secret.",
    resave: false,
    saveUninitialized: false,
    
  }))

app.use(passport.initialize());
app.use(passport.session());


// Configure Passport.js local strategy
passport.use("custom",customStrategy);


/* FILE STORAGE */
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });

// code to serialize and deserialize the session cookie for all type of strategies
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

/* ROUTES WITH FILES */
app.post("/signup", /* upload.single("picture"), */ register);
app.post("/login", /* upload.single("picture"), */ login);




// app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
// app.use("/auth", authRoutes);
// app.use("/users", userRoutes);
// app.use("/posts", postRoutes);




/* MONGOOSE SETUP */

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));


// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

