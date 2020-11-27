const mongoose = require("mongoose");
const config = require("config");

const db = config.get("Mongo-URI");

const ConnectDB = () => {
  mongoose.connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      err
        ? console.log("Error", err)
        : console.log("Data Base connected Succsesfully");
    }
  );
};

module.exports = ConnectDB;