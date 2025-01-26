const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    date: {
        type: Date,
        default: new Date(),
      },
    review: String,
    user:String
});

const Review = mongoose.model("Review",reviewSchema);
module.exports = Review;
