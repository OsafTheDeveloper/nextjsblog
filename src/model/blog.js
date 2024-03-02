import mongoose from "mongoose";
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required"],
    trim: true,
  },
  subdesc: {
    type: String,
    required: [true, "subDesc is Required"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Category is Required"],
    trim: true,
  },
  desc: {
    type: String,
    required: [true, "Desc is Required"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Image is Required"],
    trim: true,
  },
});
const blogModel = mongoose?.models?.Blog || mongoose.model("Blog", blogSchema);
export default blogModel;
