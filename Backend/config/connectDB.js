const mongoose = require("mongoose");

connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to DB.");
    });
    connection.on("error", () => {
      console.log("Something went wrong in mongodb.");
    });
  } catch (error) {
    console.log("Something went wrong while connecting to database.");
    console.log("error: ");
    console.log(error);
  }
};

module.exports = connectDB;
