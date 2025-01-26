const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
      },
    lastname:  {
        type: String,
        required: true,
      },
    email:  {
        type: String,
        required: true,
        unique: true,
      },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      default:"http://ts3.mm.bing.net/th?id=OIP.XpEhDSbIbTzkvCGO6fHI3gHaFj&pid=15.1",
      type: String
    },
    follower: {
      type: Number,
      default: 0
    },
    post: [{
      type: Schema.Types.ObjectId,
      ref: "Post"
    }],
});

const User = mongoose.model("User",userSchema);
module.exports = User;
