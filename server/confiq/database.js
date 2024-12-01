const mongoose = require("mongoose");
require("dotenv").config();

exports.dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MOGODB_URL);
    console.log("Db connection successfully");
  } catch (error) {
    console.log("Db Facing connection issues");
    console.error(error);
    process.exit(1);
  }
};
