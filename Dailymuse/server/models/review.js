const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    date: String,
    rev: String
});

const Review = mongoose.model("Review",reviewSchema);
module.exports = Review;