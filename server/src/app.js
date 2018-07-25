const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var Post = require("../models/post");
var User = require("../models/user")
var Challenge = require("../models/challenge");

app.get('/webChallenges', (req, res) => {
	Challenge.find({category: 'Web'}, 
		function (error, web_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			webChallenges: web_challenges
		})
	}).sort({_id:1})
})

app.get('/shellChallenges', (req, res) => {
	Challenge.find({category: 'Shell'}, 
		function (error, shell_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			shellChallenges: shell_challenges
		})
	}).sort({_id:1})
})

app.get('/networkingChallenges', (req, res) => {
	Challenge.find({category: 'Networking'}, 
		function (error, networking_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			networkingChallenges: networking_challenges
		})
	}).sort({_id:1})
})

app.get('/cryptoChallenges', (req, res) => {
	Challenge.find({category: 'Crypto'}, 
		function (error, crypto_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			cryptoChallenges: crypto_challenges
		})
	}).sort({_id:1})
})

app.get('/reverseEngineeringChallenges', (req, res) => {
	Challenge.find({category: 'Reverse Engineering'}, 
		function (error, reverse_engineering_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			reverse_engineeringChallenges: reverse_engineering_challenges
		})
	}).sort({_id:1})
})

app.get('/pwningChallenges', (req, res) => {
	Challenge.find({category: 'Pwning'}, 
		function (error, pwning_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			pwningChallenges: pwning_challenges
		})
	}).sort({_id:1})
})

app.get('/reconChallenges', (req, res) => {
	Challenge.find({category: 'Recon'}, 
		function (error, recon_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			reconChallenges: recon_challenges
		})
	}).sort({_id:1})
})

app.get('/steganographyChallenges', (req, res) => {
	Challenge.find({category: 'Steganography'}, 
		function (error, steganography_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			steganographyChallenges: steganography_challenges
		})
	}).sort({_id:1})
})

app.get('/forensicsChallenges', (req, res) => {
	Challenge.find({category: 'Forensics'}, 
		function (error, forensics_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			forensicsChallenges: forensics_challenges
		})
	}).sort({_id:1})
})

app.get('/CSAWChallenges', (req, res) => {
	Challenge.find({category: 'CSAW'}, 
		function (error, csaw_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			csawChallenges: csaw_challenges
		})
	}).sort({_id:1})
})

app.get('/miscChallenges', (req, res) => {
	Challenge.find({category: 'Misc'}, 
		function (error, misc_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			miscChallenges: misc_challenges
		})
	}).sort({_id:1})
})

app.get('/physicalChallenges', (req, res) => {
	Challenge.find({category: 'Physical'}, 
		function (error, physical_challenges) {
	  if (error) { console.error(error); }
	  res.send({
			physicalChallenges: physical_challenges
		})
	}).sort({_id:1})
})

app.post('/check', (req, res) => {
	var user_flag = req.body.user_flag
	var challenge_id = req.body._id
	Challenge.findOne(
		{_id: challenge_id},
		'flag points',
		function (error, challenge) {
			if (error) { console.error(error); }
			var chal_flag = challenge.flag
			var diff = user_flag.localeCompare(chal_flag)
			if (diff == 0) {
				var award = {
					'id': challenge_id,
					'points': challenge.points
				}
				console.log(award)
				// insert award into 'solved' array
				User.findOneAndUpdate(
					{sub: 'google-oauth2|111328328548956371407'}, 
					{$addToSet: {solved: challenge}},
					{safe: true, upsert: true},
					function(err, model) {
							console.log(err);
					}
				)
			}

			res.send({
				valid: diff,
			})
	})
})

app.post('/addUser', (req, res) => {
	var db = req.db;
	var new_user = new User({
		email: req.body.email,
		name: req.body.name,
		nickname: req.body.nickname,
		sub: req.body.sub,
		updated_at: req.body.updated_at
	})

	new_user.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.get('/getUser/:sub', function (req, res) {
	var db = req.db;
	User.findOne({sub:  req.params.sub}, 'email name nickname sub points solved updated_at', function (error, userFound) {
		if (error) { console.error(error); }
		var userExists = true
		if (!userFound) {
			userExists = false
		}
	  res.send({
			user: userFound,
			found: userExists
	  })
	})
})

app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
	  if (error) { console.error(error); }
	  res.send({
			posts: posts
		})
	}).sort({_id:-1})
})

app.post('/add_post', (req, res) => {
	var db = req.db;
	var title = req.body.title;
	var description = req.body.description;
	var new_post = new Post({
		title: title,
		description: description
	})

	new_post.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.put('/posts/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }

	  post.title = req.body.title
	  post.description = req.body.description
	  post.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
})

app.delete('/posts/:id', (req, res) => {
	var db = req.db;
	Post.remove({
		_id: req.params.id
	}, function(err, post){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

app.get('/post/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

app.listen(process.env.PORT || 8081)
