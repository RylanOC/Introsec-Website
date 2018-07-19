var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    nickname: String,
    sub: String,
    updated_at: Date
  },
  {
    collection: 'users'
  }
)

var User = mongoose.model('User', userSchema)
module.exports = User;
