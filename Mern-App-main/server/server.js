const express = require("express");
const app = express();
const ConnectDB = require("./Config/ConnectDB");

const router = require("./Routes/contact");
const register = require('./Routes/user')

//1 : Parse Data

app.use(express.json());

//2 : Connection the data base

ConnectDB();

//3 : Define the routes

app.use("/", router);

app.use("/" , register)

//4 : Connection to the server

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  err
    ? console.log("Error", err)
    : console.log(`Server is running on Port ${PORT}`);
});
