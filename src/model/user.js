import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "UserName is Required"],
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Password is Required"],
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const userModel = mongoose?.models?.User || mongoose.model("User", userSchema);
export default userModel;
