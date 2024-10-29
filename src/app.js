const express = require("express");
const morgan = require("morgan");
const app = express();
const helmet = require("helmet");
const compression = require("compression");

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
const { checkOverload } = require("./helpers/check.connect");
checkOverload();

// init route

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello world",
  });
});

// handling error

module.exports = app;
