import Blog from "../models/blog.model.js";
export const login = async (req, res) => {
  const { username, password } = req.body;

  const response = await Blog.findOne({ username });
};

export const signup = async (req, res) => {
  // const {}
  console.log("Signup route", req.body);
  res.json({ success: true, message: req.body });
};
