const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
      },
    username:  {
        type: String,
        required: true,
        unique: true,
      },
    password:  {
        type: String,
        required: true,
        unique: true,
      },
    yourPost: [{
      type: Schema.Types.ObjectId,
      ref: "Data"
    }],
    watchLater: [{
      type: Schema.Types.ObjectId,
      ref: "Data"
    }],
    liked: [{
      type: Schema.Types.ObjectId,
      ref: "Data"
    }],
});

const User = mongoose.model("User",userSchema);
module.exports = User;