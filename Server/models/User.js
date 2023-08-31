import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    // password: {
    //   type: String,
    //   required: true,
    //   min: 5,
    // },

    // location: String,
    // occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);
export default User;