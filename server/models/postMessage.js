const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  restaurantName:String,
  firstName: String,
  lastName: String,
  question: String,
  mobileNumber: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
