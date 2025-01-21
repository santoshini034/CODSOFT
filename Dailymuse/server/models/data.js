const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    heading : String,
    image:{
        default: "https://images.unsplash.com/photo-1735779411146-79e19ac891cc?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: String,
        set: (v) => v === ""? "https://images.unsplash.com/photo-1735779411146-79e19ac891cc?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D": v
    },
    date: {
        type: Date,
        default: new Date(),
      },
    Liked: Number,
    information: String,
    dtype: String,
});

const Data = mongoose.model("Data",dataSchema);
module.exports = Data;