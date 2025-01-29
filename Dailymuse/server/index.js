// requires
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const cookie = require("cookie-parser")

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

//file require
const User = require("./models/user");
const Post = require("./models/post");
const Review = require("./models/review");


// middleware
app.use(cors());
app.use(bodyParser.json())
app.use(cookie());

const createSecretToken = (id) => {
    return jwt.sign({id},process.env.TOKEN_KEY, {
        expiresIn: '1h',
    });
}; 

//userverifucation
const userVerification = async(req, res, next) => {
    const {auth, ...post} = req.body;
    if(!auth){
        return res.json({success: false, message: "Token not found"});
    }
    const token = jwt.verify(auth, process.env.TOKEN_KEY , 
        async(err,data) => {
            if(err){
                return res.json({success: false, message: "User not found"});
            }else{
                const details = await User.findById(data.id);
                const email = details.email;
                const postdata = {email, post}
                req.data = postdata;
                next();
            }
        })
}

//start port
app.listen(PORT,() => {
    console.log("app is listerning");
})

// connect to database
main().then(() => {
    console.log("connected to db");
})
async function main() {
   await mongoose.connect(url); 
}

//crud operations
//sign in
app.post("/signin", async(req, res) => {
    try {
        let userdata = req.body;
        let userda = await new User(userdata);
        userda.password = await bcrypt.hash(userda.password, 12);
        await userda.save();
        const token = createSecretToken(userda._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.json({success: true, message: "User has been added", token});
    } catch (err) {
        res.json({success: false, message: "error occur"});
    }
})

//login
app.post("/login",async(req, res) => {
    try {
        let {email, password} = req.body;
        let umail = await User.findOne({email});
        if(!umail){
            return res.json({status: false, message:"user not found"});
        }
        const auth = await bcrypt.compare(password,umail.password);
        if(!auth){
            return res.json({status: false, message:"Password is incorrect"});
        }
        const token = createSecretToken(umail._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true
        });
        res.json({success: true ,message : "User is logged in", token});
    } catch (error) {
        res.json({success: false, message: "error occur"});
    }
})

//create post page athhorization
app.post("/addpost", userVerification, async(req, res) => {
    try {
        const data = req.data;
        const email = data.email;
        const post = data.post;
        const userdata =await User.findOne({email})
        const postdata = new Post(post);
        userdata.post.push(postdata);
        await postdata.save();
        await userdata.save();
        res.json({success: true, message: "blog has been posted"});
    } catch (error) {
        res.json({success: false, message: "some error occur, please try again"});
    }
})

//home
app.post('/home',async(req, res) => {
    try {
        const posts = await Post.find({});
        const user = await User.find({});
        res.json({success:true,posts, user});
    } catch (error) {
        res.json({success: false, message: "some error occur, please try again"});
    }
})

//category
app.post('/category',async(req, res) => {
    try {
        const category = req.body.category;
        const posts = await Post.find({});
        const postarr = [];
        posts.map((el) => {
            if(el.dtype == category){
                postarr.push(el)
            }
        })
        res.json({success:true, postarr});
    } catch (error) {
        res.json({success: false, message: "some error occur, please try again"});
    }
})

//writer
app.post("/writer/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id).populate("post");
        res.json({success:true, user});
    } catch (error) {
        res.json({success: false, message: "some error occur, please try again"});
    }
})

//show
app.get("/show/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const data1 = await Post.findById(id);
        let dataview = data1.view;
        dataview = dataview + 1;
        const data2 = await Post.findByIdAndUpdate(id, {view: dataview});
        const data = await Post.findById(id).populate("review");
        const user = await User.findOne({post: new mongoose.Types.ObjectId(id)})
        res.json({success: true, data,user});
    } catch (error) {
        res.json({success: false, message: "some error occur, please try again"});
    }
})

//review 
app.post("/review/:id",userVerification,async(req, res) => {
    try {
        let {id} = req.params;
        const review = req.body.review;
        const user = req.data.email;
        const data = {review,user};
        console.log(data);
        const postreview =await Post.findById(id)
        const reviewdata = new Review(data);
        console.log(reviewdata);
        postreview.review.push(reviewdata);
        await reviewdata.save();
        await postreview.save();
        const detail = await Post.findById(id).populate("review");
        res.json(detail);
    } catch (error) {
        res.json({success: false, message: "some error occur, please try again"});
    }
})

//follower
app.post("/follower",userVerification,async(req,res) => {
    try {
        const email = req.body.user.email;
        console.log(email);
        const data1 = await User.findOne({email});
        let datafollow = data1.follower;
        datafollow = datafollow + 1;
        const data2 = await User.findOneAndUpdate({email}, {follower: datafollow});
        res.json(data2)
    } catch (error) {
        res.json({success: false, message: "some error occur, please try again"});
    }
})

//account
app.post("/account",userVerification,async(req,res) => {
    try {
        const email = req.data.email;
        const use = await User.findOne({email}).populate("post");
        res.json(use);
    } catch (error) {
        res.json({success: false, message: "some error occur, please try again"});
    }
})