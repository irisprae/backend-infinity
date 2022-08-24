require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const config = require('./config')
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const activity = require("./routes/activity");
const activitiesRouter = require('./routes/activitiesRouter');

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
//app.use("/api/activity", activity);

app.use('/activities', activitiesRouter);

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));

