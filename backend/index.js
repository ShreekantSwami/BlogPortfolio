import express from "express";
import cors from "cors";
import blogAdminRoutes from "./src/routes/blogAdminRoutes.routes.js";

const app = express();
app.use(cors()); // allow all origins by default

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Root route hit successfull");
});

app.use("/api/blog/admin", blogAdminRoutes);

app.listen(4000, (e) => {
  console.log("Connected to the DB successfully");
});
