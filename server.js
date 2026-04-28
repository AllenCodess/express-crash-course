const express = require("express");
const { request } = require("http");
const path = require("path");
const posts = require("./routes/posts");
const port = process.env.PORT;
const app = express();

//Routes
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));
