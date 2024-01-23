
const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const connectDatabase = require('./src/config/db');
connectDatabase();

// import routers
const userRouter = require("./src/routers/userRouter");
const categoryRouter = require("./src/routers/categoryRouter");
const carRouter = require("./src/routers/carRouter");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", carRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});