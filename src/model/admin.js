import mongoose from "mongoose";
const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
const adminModel =
  mongoose?.models?.Admin || mongoose.model("Admin", adminSchema);
export default adminModel;
