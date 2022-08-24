require("dotenv").config();
const express = require("express");
// const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4001;

const config = require('../config')
// const connection = require("../db");
const userRoutes = require("../routes/users");
const authRoutes = require("../routes/auth");
const activitiesRouter = require('../routes/activitiesRouter');

// database connection
// connection();

// middlewares
if (config.isVercel) {
  app.use(async (req, res, next) => {
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    return next();
  });
}
app.use(express.json());
app.use(
    cors({
      origin: ['http://localhost:5173', 'https://infinity-health.vercel.app'],
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
  );

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/activities", activitiesRouter);

// const port = process.env.PORT || 4001;
// app.listen(port, console.log(`Listening on port ${port}...`));
module.exports = app;


// index.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const PORT = require('../config');
// const config = require('./config');

// const userRouter = require('../routes/user');

// const app = express();

// // Body parser to parse json in request body for us
// app.use(bodyParser.json());
// // CORS
// app.use(
//   cors({
//     origin: '*',
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   })
// );

// // Our routers
// app.use('/users', userRouter);

