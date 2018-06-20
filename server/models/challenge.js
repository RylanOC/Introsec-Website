var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var challengeSchema = new mongoose.Schema(
  {
    points: Number,
    category: String,
    name: String,
    hint: String,
    author: String,
    solved: Boolean,
    _id: String
  },
  {
    collection: 'all'
  }
)

var Challenge = mongoose.model('Challenge', challengeSchema)
module.exports = Challenge;
