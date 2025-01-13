require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

app.listen(PORT,() => {
    console.log("App started");
});

main().then(() => {
    console.log("connected to db");
})
async function main() {
   await mongoose.connect(url); 
}