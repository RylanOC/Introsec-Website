const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const https = require('https')
const fs = require('fs')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var User = require("../models/user")
var Challenge = require("../models/challenge");

// load cert + private key so we can serve our app over https
const options = {
	cert: fs.readFileSync('/etc/letsencrypt/live/rylan.party/fullchain.pem'),
	key: fs.readFileSync('/etc/letsencrypt/live/rylan.party/privkey.pem')
}

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
	Challenge.find({category: 'Crytpo'}, 
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
				// insert award into 'solved' array
				User.findOneAndUpdate(
					{sub: req.body.user_id}, 
					{$addToSet: {solved: challenge}},
					{fields: 'solved', new: true},
					function(err, success) {
							if (err) {
								console.log(err);
							}
						  console.log('solved: ' + success);
					}
				).then(function () {
					console.log('DONE WITH CHECK FLAG')
					console.log('---------------------------------------------------')		
				})
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

// returns a list of challenge objects that a given user has solved
app.get('/getSolved/:user_id', function(req, res) {
	var db = req.db
	console.log('')
	console.log('')
	console.log('starting get user')
	User.findOne({sub: req.params.user_id}, 'solved', function (error, user) {
		if (error) { console.log(error) }

		console.log('got user :' + user)
		
		// only continue if a valid user is found
		if (user) {
			// create list of challenge objects which have been solved
			var solved = []
			for (var i = 0; i < user.solved.length; i++) {
				Challenge.findOne({_id: user.solved[i]._id}, function (error, challenge){
					if (error) {console.log(error)}
					console.log('finding challenge')
				}).then(function (challenge) {
					console.log('found challenge: ' + challenge)
					solved.push(challenge)
					// SUPER JANKY way of making sure the list is complete before returning it
					if (solved.length === user.solved.length) {
						res.send({
							solved: solved
						})
					}
				}) 
			}
		}
	}) 
})

app.listen(process.env.PORT || 8081)
https.createServer(options, app).listen(8443)