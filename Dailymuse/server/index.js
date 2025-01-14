require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./models/data");
const sample = require("./init/sample");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json())

app.listen(PORT,() => {
    console.log("App started");
});

main().then(() => {
    console.log("connected to db");
})
async function main() {
   await mongoose.connect(url); 
}

app.get("/home",async(req,res) => {
    let alldata = await data.find();
    res.json(alldata);
});

app.get("/show/:id",async(req,res) => {
    let {id} = req.params;
    let iddata = await data.findById(id);
    res.json(iddata);
});
