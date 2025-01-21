// reqiures
require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require("passport-local")
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

//filr require
const data = require("./models/data");
const user = require("./models/user")
const sample = require("./init/sample");
const User = require('./models/user');

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;


app.use(cors());
app.use(bodyParser.json())
app.use(cookieParser());

const userVerification = async(req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log(token); 

    if (!token) { 
        return res.json({ status: false }); 
    }

    const tock =  jwt.verify(token, process.env.TOKEN_KEY ,async (err, data) => {
      if (err) {
        return res.json({ status: false }); 
      } else {
        const details = await User.findById(data.id);
        req.username = details.username;
        next();
      }
    })

  }


const createSecretToken = (id) => {
    return jwt.sign({id},process.env.TOKEN_KEY, {
        expiresIn: '1h',
    });
}; 


//start port
app.listen(PORT,() => {
    console.log("App started");
});

// connect to database
main().then(() => {
    console.log("connected to db");
})
async function main() {
   await mongoose.connect(url); 
}

//crud operations
//home
//home page data
app.get("/home",async(req,res) => {
    let alldata = await data.find();
    res.json(alldata);
}
);

//show
//show page data
app.get("/show/:id",async(req,res) => {
    let {id} = req.params;
    let users = await User.findOne({yourPost: id })
    const username =users.username;
    let iddata = await data.findById(id);
    res.json({iddata,username});
});

//show page edit
//show page edit authentication
app.post('/entrytoedit/:id',userVerification,async(req, res) => {
    const {id} = req.params;
    const usernameOfServer = req.username;
    let users = await User.findOne({yourPost: id })
    const usernameOfData =users.username;
    console.log(usernameOfData, usernameOfServer);
    if(usernameOfServer == usernameOfData){
        res.json("success");
    }else{
        res.json("failed");
    }
})

//show page edit data
app.get("/editpage/:id",async(req,res) => {
    let {id} = req.params;
    let da = await data.findById(id);
    res.json(da);
});

//show page edit post request
app.post("/editdata/:id",async(req,res) => {
    let {id} = req.params;
    let {dat} = req.body; 
    await data.findByIdAndUpdate(id, dat);
    res.json("success");
})

//show page delete request
app.post("/delete/:id",userVerification,async(req,res) => {
    let {id} = req.params;
    console.log(id);
    // await data.findByIdAndDelete(id);
    // res.json("success");
    // let {dat} = req.body; 
    // let username = req.username;
    // let users  = await User.findOne({username});
    // console.log(username);
    // let newdata = new data(dat);
    // users.yourPost.push(newdata);
    // await newdata.save();
    // await users.save();
    // res.json("success");

    // let {id} = req.params;
    // let da = await data.findById(id);
    // res.json(da);
})

//create
//create page add data
app.post("/adddata",userVerification,async(req,res) => {
    let {dat} = req.body; 
    let username = req.username;
    let users  = await User.findOne({username});
    console.log(username);
    let newdata = new data(dat);
    users.yourPost.push(newdata);
    await newdata.save();
    await users.save();
    res.json("success");
})

//sign up page
app.post("/signup", async(req, res) => {
    const {email, username, password} = req.body;
    const existingUser = await user.findOne({ email });
      if (existingUser) {
        return res.json({success:false ,message: "user already exist"});
      }
      const users = new user({email, username, password});
      users.password = await bcrypt.hash(users.password, 12);
      await users.save();
      const token = createSecretToken(users._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res.json({success:true ,message : "user is registered"});
})



//login page
app.post("/login",async(req, res) => {
    const {username, password} = req.body;
    const users = await user.findOne({ username });
    if(!users){
        return res.json({success: false ,message : "user already exist"}); 
    }
    const auth = await bcrypt.compare(password,users.password);
    if (!auth) {
        return res.json({success: false ,message : "incorrect password"}) 
    }
    const token = createSecretToken(users._id);
    res.cookie("token", token, {
        httpOnly: true,
        secure: true
    });
    res.json({success: true ,message : "User is logged in", token});
})
