const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoute = require("./routes/posts-routes");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

mongoose
  .connect(
    "mongodb+srv://ankit:ankit@cluster0.3tqtgly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.use("/api/posts", postsRoute);

module.exports = app;
