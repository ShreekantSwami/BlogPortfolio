import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    content: String, // Will hold full HTML string
    published: Boolean,
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
