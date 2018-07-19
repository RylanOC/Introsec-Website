/*
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/users')

var db = mongoose.connection

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

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
})
*/
