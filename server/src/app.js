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
	var db = req.db;
	var user_flag = req.body.user_flag;
	var challenge_id = req.body.id;
	
	var diff = user_flag.localeCompare('test')
	var match = false
	if (diff == 0) {
		match = true
	}
	res.send({
		valid: match
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
