// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// // const config = require('./config')
// const connection = require("./db");
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");
// const activitiesRouter = require('./routes/activitiesRouter');

// // database connection
// connection();

// // middlewares
// app.use(express.json());
// app.use(cors());

// // routes
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);
// app.use('/activities',activitiesRouter);

// const port = process.env.PORT || 4001;
// app.listen(port, console.log(`Listening on port ${port}...`));
// index.js

// index.js

const mongoose = require('mongoose');
const app = require('./api/index.js');

const config = require('./config');

const boot = async () => {
  console.log(config.mongoUri);
  // Connect to mongodb
  await mongoose.connect(config.mongoUri, config.mongoOptions);
  // Start express server
  app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
  });
};

boot();
console