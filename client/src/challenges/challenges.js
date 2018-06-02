var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/challenges')

var db = mongoose.connection

var challengeSchema = new mongoose.Schema(
  {
    points: Number,
    category: String,
    name: String,
    hint: String,
    author: String,
    solved: Boolean
  },
  {
    collection: 'all'
  }
)
var Challenge = mongoose.model('Challenge', challengeSchema)

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
})

// export web challenges
Challenge.find(
  {
    'category': 'web'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.web = challenges
  }
)

// export shell challenges
Challenge.find(
  {
    'category': 'shell'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.shell = challenges
  }
)

// export networking challenges
Challenge.find(
  {
    'category': 'networking'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.networking = challenges
  }
)

// export crypto challenges
Challenge.find(
  {
    'category': 'crypto'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.crypto = challenges
  }
)

// export reverse_engineering challenges
Challenge.find(
  {
    'category': 'reverse_engineering'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.reverse_engineering = challenges
  }
)

// export pwning challenges
Challenge.find(
  {
    'category': 'pwning'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.pwning = challenges
  }
)

// export recon challenges
Challenge.find(
  {
    'category': 'recon'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.recon = challenges
  }
)

// export steganography challenges
Challenge.find(
  {
    'category': 'steganography'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.steganography = challenges
  }
)

// export forensics challenges
Challenge.find(
  {
    'category': 'forensics'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.forensics = challenges
  }
)

// export csaw challenges
Challenge.find(
  {
    'category': 'csaw'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.csaw = challenges
  }
)

// export misc challenges
Challenge.find(
  {
    'category': 'misc'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.misc = challenges
  }
)

// export physical challenges
Challenge.find(
  {
    'category': 'physical'
  },
  function (err, challenges) {
    if (err) return console.error(err)
    exports.physical = challenges
  }
)
