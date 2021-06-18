const express = require("express");
const mongoose = require("mongoose");
require("./config/db.connection");
const bodyParser = require("body-parser");
const mongoSanitize = require("express-mongo-sanitize"); // for nosql injection
const cookieParser = require("cookie-parser");
const CarAPI = require("./routes/car");
const AccessAPI = require("./routes/access-card");

const app = express();
app.use(express.json());

// ====================== body parser ======================
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// ====================== Cookie Parser ======================
app.use(cookieParser("car-system"));
// ====================== Mongo Sanitize ======================
// Data sanitization against NoSQL Query injection
app.use(mongoSanitize()); // prevent from NoSQL injection like (email:{"$gt":""}) in body

app.use("/api/v1", CarAPI);
app.use("/api/v2", AccessAPI);
const port = 3000;

app.listen(port, () => {
  console.log(` Server is running now ...on : ${port}`);
});