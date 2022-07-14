const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CNN_STRING);

    console.log("connected to mongo db");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  dbConnection,
};
