import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const port = process.env.PORT;
const app = express();

//Routes
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));
