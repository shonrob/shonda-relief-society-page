const express = require("express");
const path = require("path");
const http = require("http");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Yay, are connected to the Database"))
  .catch((err) => console.log("Connection failed to Database:", err));

// importing the routing file to handle the default index route
const index = require("./server/app");

// Importing Routing files here
const feedMissionariesRoutes = require("./server/routes/feed-missionaries");
const exp = require("constants");

// Creating an instance of Express
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Tell express to use the Morgan logger
app.use(logger("dev"));

// Add support for CORS
// CORS: Cross Origin Resource Sharing: allows unqiue domains to talk to each other
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Tell express to use the specified director as the root directory for the website
app.use(
  express.static(
    path.join(__dirname, "./dist/shonda-relief-society-page/browser")
  )
);

// Tell express to map the default route('/') to the index route
app.use("/", index);

// Code to MAP the URL's to Routing files here
app.use("/server/routes/feed-missionaries", feedMissionariesRoutes);

// Tell express to map all other non-defined routes back to the index file page
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./dist/shonda-relief-society-page/browser/index.html")
  );
});

// Define the port address and tell express to use this port
const port = process.env.PORT || "3000";
app.set("port", port);

// Create HTTP server
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, function () {
  console.log("API is running on localhost: " + port);
});
