var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var solveSchema = new mongoose.Schema(
  {
    id: String,
    points: Number
  }
)

var userSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    nickname: String,
    sub: String,
    points: Number,
    solved: [ solveSchema ],
    updated_at: Date
  },
  {
    collection: 'users'
  }
)

var User = mongoose.model('User', userSchema)
module.exports = User;
