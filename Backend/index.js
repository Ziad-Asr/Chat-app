const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const cookiesParser = require("cookie-parser");
const router = require("./routes/index");

const port = process.env.PORT || 8080;

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookiesParser());

app.get("/", (req, res) => {
  res.send(`Server is running on port ${port}`);
});

//api endpoints
app.use("/api", router);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
