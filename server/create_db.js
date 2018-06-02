var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'

MongoClient.connect(url, function (err, db) {
  if (err) throw err
  var dbo = db.db('challenges')
  var web = [
    {
      points: 5,
      category: 'Web',
      name: 'Find Flag',
      hint: 'Find the flag hidden on this webpage!',
      author: 'Milo',
      solved: true
    },
    {
      points: 10,
      category: 'Web',
      name: 'Javascript is Bad',
      hint: 'Find the flag hidden on this webpage!\n(Looking at page source is cheating)',
      author: 'Milo',
      solved: false
    },
    {
      points: 15,
      category: 'Web',
      name: 'Useragent Lock',
      hint: 'This page has some kind of fingerprinting system to prevent unauthorized users from gaining access!\nCan you fool the system?',
      author: 'Milo',
      solved: false
    },
    {
      points: 30,
      category: 'Web',
      name: 'Om nom nom',
      hint: 'You must become an admin! But you don’t know the password!\nI wonder if there’s another way…',
      author: 'Milo',
      solved: false
    },
    {
      points: 40,
      category: 'Web',
      name: 'RPI Calendar',
      hint: 'It’s hard to keep track of classes and finals and dates! We’ve built a handy online calendar using the cal command to make your life easier.',
      author: 'Milo (Inspired by HackThisSite)',
      solved: false
    },
    {
      points: 50,
      category: 'Web',
      name: 'Y2K Cult',
      hint: 'This Y2K Cult group claims to be the best hacker team ever. Let’s see just how good they are.',
      author: 'Milo',
      solved: false
    },
    {
      points: 60,
      category: 'Web',
      name: 'Web Forms',
      hint: 'The admin of this site set a super secure long password in 1337speak, but it’s so hard to remember! He put in a failsafe, so the website can email him the password. Smells like a vulnerability.',
      author: 'Milo (Inspired by HackThisSite)',
      solved: false
    }

  ]
  dbo.collection('web').insertMany(web, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var shell = [
    {
      points: 5,
      category: 'Shell',
      name: 'Where is config',
      hint: 'Where are system configuration files stored?',
      author: 'Milo',
      solved: false
    },
    {
      points: 5,
      category: 'Shell',
      name: 'Current User',
      hint: 'What command prints the name of the current user (and nothing else)',
      author: 'Milo',
      solved: false
    },
    {
      points: 10,
      category: 'Shell',
      name: 'Newest Files',
      hint: `What command will print a list of files in the current directory, sorted so the newest files are on the bottom?

Note: we are looking for one command, don’t try elaborate piping or write a solution in python/perl/etc

Extra note: There are many valid commands that solve this problem, and we don’t accept them all. Write the shortest command possible that solves the problem (don’t use --extended-flags, and make sure to compress your flags like -ax instead of -a -x)`,
      author: 'Milo',
      solved: false
    },
    {
      points: 15,
      category: 'Shell',
      name: 'Daemon Shell',
      hint: 'What shell does the user ‘daemon’ have? (On Linux or *BSD)',
      author: 'Milo',
      solved: false
    },
    {
      points: 30,
      category: 'Shell',
      name: 'Finish Bandit 13',
      hint: 'The flag is the password needed to log into level 14 of Bandit',
      author: 'Over the Wire',
      solved: false
    },
    {
      points: 40,
      category: 'Shell',
      name: 'I dream of FTP',
      hint: 'What is the sha256 sum of the file “wget-1.17.1.tar.gz.sig” from the GNU public ftp server?',
      author: 'Milo',
      solved: false
    },
    {
      points: 50,
      category: 'Shell',
      name: 'Sherlock of the Shell',
      hint: `Download “The Command Line Murders” from GitHub and complete the mystery. The flag is the murderer’s name.

Note: There are instructions in the “solution” file on how to verify you have the right answer`,
      author: 'Milo (Created by Noah Veltman)',
      solved: false
    },
    {
      points: 60,
      category: 'Shell',
      name: 'Finish Bandit (Almost)',
      hint: 'The flag is the password that will log into level 25 of Bandit',
      author: 'Over the Wire',
      solved: false
    }

  ]
  dbo.collection('shell').insertMany(shell, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var networking = [
    {
      points: 5,
      category: 'Networking',
      name: 'IP Address',
      hint: 'The flag is this website’s IP address.',
      author: 'Milo',
      solved: false
    },
    {
      points: 10,
      category: 'Networking',
      name: 'Into the Depths',
      hint: `Can you access the mysterious “deep-web”?

introsecwdcarldu.onion`,
      author: 'Milo',
      solved: false
    },
    {
      points: 15,
      category: 'Networking',
      name: 'Kitten of the Internet',
      hint: `A flag daemon is running on ctf.backdrifting.net and is listening on port 3012!

Connect to the service and send the line “gimme the flag”.`,
      author: 'Milo',
      solved: false
    },
    {
      points: 20,
      category: 'Networking',
      name: 'Telnet',
      hint: 'Get the password of the user logging in.',
      author: 'Milo',
      solved: false
    },
    {
      points: 30,
      category: 'Networking',
      name: 'Sniff Sniff',
      hint: 'Get the response sent by the server. You could try to figure out the perl script, but there’s an easier way…',
      author: 'Milo',
      solved: false
    },
    {
      points: 50,
      category: 'Networking',
      name: 'FTP',
      hint: 'A user downloaded the flag through the File Transfer Protocol! We intercepted their network traffic, can you get the flag out?',
      author: 'Milo',
      solved: false
    },
    {
      points: 60,
      category: 'Networking',
      name: 'MIMEs',
      hint: 'We caught an employee at flagCorp emailing someone else a flag! Fortunately they weren’t using encryption, so you can get the flag back out, right?',
      author: 'Milo',
      solved: false
    },
    {
      points: 100,
      category: 'Networking',
      name: 'What\'s that sound',
      hint: `find the flag.
Note: For simplicity, enter the flag with no punctuation or spaces, all lower case.`,
      author: 'Milo',
      solved: false
    },
    {
      points: 150,
      category: 'Networking',
      name: 'Korean girls screaming',
      hint: 'Buleah!',
      author: 'Milo',
      solved: false
    }
  ]
  dbo.collection('networking').insertMany(networking, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var crypto = [
    {
      points: 5,
      category: 'Crytpo',
      name: 'Working in Binary',
      hint: 'So I found this text file but its just ones and zeroes. Maybe you can do something with it?',
      author: 'Challenge from Jazmyn',
      solved: true
    },
    {
      points: 10,
      category: 'Crytpo',
      name: 'Decode Me',
      hint: 'M2FzeV8yX2QzYzBkMw==',
      author: 'Challenge from Jazmyn',
      solved: true
    },
    {
      points: 15,
      category: 'Crytpo',
      name: 'Rotation Cipher',
      hint: 'Note: The flag is case sensitive & puncuation is not rotated',
      author: 'Challenge from Jazmyn',
      solved: true
    },
    {
      points: 20,
      category: 'Crytpo',
      name: 'Xor',
      hint: 'Get the correct password.',
      author: 'Challenge from Milo and Jazmyn',
      solved: true
    },
    {
      points: 25,
      category: 'Crytpo',
      name: 'Substitution',
      hint: 'The decrypted text is the flag',
      author: 'Challenge from Jazmyn',
      solved: true
    },
    {
      points: 30,
      category: 'Crytpo',
      name: 'Needle in the hashstack',
      hint: 'You are provided with a password hasher and a list of passwords. The correct password is in there, but how will you find it?',
      author: 'Challenge from Milo',
      solved: true
    },
    {
      points: 40,
      category: 'Crytpo',
      name: 'PGP',
      hint: `An agent tried to send us the flag they acquired, but we don’t know how to decrypt their secret transmission. Below is the message he sent to us, and attached is the public key we found on a zip disk shoved under our door last week.

-----BEGIN PGP MESSAGE-----
Version: GnuPG v1.4.12 (GNU/Linux)

owEBUgGt/pANAwACARMpwz4O8VNzAawiYgRmbGFnVsVHRmZsYWd7dHJVNXRfZzAw
ZF9jcnlwdDB9CokBHAQAAQIABgUCVsVHRgAKCRATKcM+DvFTc8crB/oC6p1lx3JO
PFDJA2vZPl006llV7bdFYQ6UR435+GjxAJegvLFtvvZdZqsw3cy6ascnt0lO7bSH
hZGZjxZkWTU5jso9zjU6wnXhbCBdkSZRoT4Sy6Q7Nnh4Ho4ALfCqDol6RtxrdNeO
Nqa+bqW2ommch7BdB0OD4Ji3syqM/LOvfiIDEuuYmY8SmgpbbBRLmd1llSwnBVqL
SkAYwqC/5EcLfko6xkvj8XWqeCbCvx7AefZHMKCmNlwQCpB7xkGmrLwtmIMdA+Jd
V66Xqe6ctr+cnsUJM70xp2MX6RF4pGf3dLTXtTAK8ofXnaWxw0Ar+7veJUWpPSLQ
jorAGjRkZre2
=VOlq
-----END PGP MESSAGE-----`,
      author: 'Challenge from Milo',
      solved: true
    },
    {
      points: 50,
      category: 'Crytpo',
      name: 'Random Seeds',
      hint: `We’ve invented our own cryptographic algorithm that’s uncrackable! The message is encrypted on each connection based on the last character of our server’s process ID, and how could a cracker ever know our PID?

ctf.backdrifting.net port 6001`,
      author: 'Challenge from Milo',
      solved: true
    },
    {
      points: 60,
      category: 'Crytpo',
      name: 'Rotation',
      hint: `We’ve intercepted only part of the source code for CryptoCorp’s new authentication system. We know it’s running live on their internal network, and need you to figure out a way in.

ctf.backdrifting.net port 6003`,
      author: 'Challenge from Milo',
      solved: true
    },
    {
      points: 100,
      category: 'Crytpo',
      name: 'Poseidon',
      hint: `We have intercepted information about a hidden hacker database online. We know the username and password to access the database, and we know its IP address and port number. What we don’t know is the encryption protocol being used. Without it, our login credentials are useless. Complete the mission. Extract the secrets stored in the hacker database.

Username: poseidon

Password: open sesame

ctf.backdrifting.net port 6002`,
      author: 'Challenge from Milo',
      solved: true
    },
    {
      points: 150,
      category: 'Crytpo',
      name: 'Not quite the right idea...',
      hint: `The Poseidon hackers have learned their lesson! They’ve switched to the Advanced Encryption Standard, and they didn’t even write it themselves! They’ve cleverly used the implementation from OpenSSL, so there won’t be any more slip-ups! What do we do?

Perhaps this will help:

AES

Initialization Vectors

Message Authentication Code`,
      author: 'Challenge from Milo',
      solved: true
    },
    {
      points: 200,
      category: 'Crytpo',
      name: 'Thump Thump',
      hint: `A corporation we are pentesting has a satellite facility. The second facility sends regular heartbeats to the mainframe to confirm both servers are running smoothly. We believe we can exploit this cryptographic heartbeat to gain privileged access to the mainframe.

Attached is a network recording of several heartbeats taking place, as well as the public keys of the servers involved, and the source code that manages the heartbeats. The mainframe is listening for additional heartbeats at ctf.backdrifting.net port 6004.

Good luck.`,
      author: 'Challenge from Milo',
      solved: true
    }

  ]
  dbo.collection('crypto').insertMany(crypto, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var reverseEngineering = [
    {
      points: 15,
      category: 'Reverse Engineering',
      name: 'What\'s my pass',
      hint: `Find the password and get the flag!

Note: For Windows 32bit`,
      author: 'Jazmyn',
      solved: true
    },
    {
      points: 15,
      category: 'Reverse Engineering',
      name: 'Multipass',
      hint: `
    Leeloo Dallas mul-ti-pass.

This challenge is compiled for OSX and Linux. There is no practical difference between the two samples.`,
      author: 'Milo',
      solved: true
    },
    {
      points: 15,
      category: 'Reverse Engineering',
      name: 'What\'s my pass',
      hint: `Find the password and get the flag!

Note: For Windows 32bit`,
      author: 'Jazmyn',
      solved: true
    },
    {
      points: 25,
      category: 'Reverse Engineering',
      name: 'Ramping it up',
      hint: 'What will you do when it’s not just a string?',
      author: 'Jazmyn',
      solved: true
    },
    {
      points: 30,
      category: 'Reverse Engineering',
      name: 'Blacklisting ATM',
      hint: `We have made an ultra-secure ATM for storing secrets. It runs on Linux and automatically detects attempts to reverse engineer it. Completely unhackable. State of the art encryption. Prove me wrong.

Note: The binary only runs correctly on 32-bit Linux systems. It is technically solvable statically on 64-bit systems, but the intended solution is dynamic analysis on 32-bit Linux.`,
      author: 'Milo',
      solved: true
    },
    {
      points: 50,
      category: 'Reverse Engineering',
      name: 'Hash Collisions',
      hint: 'ctf.backdrifting.net port 5001',
      author: 'Fairgame',
      solved: true
    }
  ]
  dbo.collection('reverse_engineering').insertMany(reverseEngineering, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var pwning = [
    {
      points: 10,
      category: 'Pwning',
      name: 'Buffers',
      hint: `Intelligence has discovered the address of another hacker database, and even intercepted a snippet of their server’s source code, but we haven’t found a way in yet. Can you help us?

 1void handleClient( int sock )
 2{
 3        char buffer[10];
 4        int printFlag = 0;
 5        sendMsg(sock, "=== Connection established with secure database ===\n");
 6        sendMsg(sock, "Enter password: ");
 7        read(sock, buffer, 20);
 8        if( strcmp(buffer, PASSWD) == 0 )
 9                printFlag = 1;
10        if( printFlag )
11        {
12                sendMsg(sock, "Password correct! Decoding flag...\n");

ctf.backdrifting.net port 7001`,
      author: 'Milo',
      solved: true
    },
    {
      points: 20,
      category: 'Pwning',
      name: 'Deadbeef',
      hint: `These hackers have a sophisticated authentication system. We can’t even see where they’re doing a password comparison! Can you find another way in?

ctf.backdrifting.net port 7003`,
      author: 'Milo',
      solved: true
    },
    {
      points: 30,
      category: 'Pwning',
      name: 'Format Strings',
      hint: `This seems too simple to break. They read a username and password from us, compare the password to one stored in the file, and don’t let us in unless the password is right. What do?

ctf.backdrifting.net port 7004`,
      author: 'Modern Binary Exploitation',
      solved: true
    },
    {
      points: 50,
      category: 'Pwning',
      name: 'Pythonic Problems',
      hint: `If you’re having trouble figuring this out statically, try connecting and play around a little.

Here’s a reference on pipes.

ctf.backdrifting.net port 7005`,
      author: 'Avi',
      solved: true
    }
  ]
  dbo.collection('pwning').insertMany(pwning, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var recon = [
    {
      points: 5,
      category: 'Recon',
      name: 'Server Signatures',
      hint: `What version of PHP is the attached script running?

Note: submit your answer in the form “PHP/x.x.xx”`,
      author: 'Milo',
      solved: true
    },
    {
      points: 15,
      category: 'Recon',
      name: 'Server Signatures 2',
      hint: `What version of ssh is running on scanme.nmap.org?

Note: Give us the complete version string, not just ‘OpenSSH’ or ‘SunSSH’. We want the full version, including Operating System.`,
      author: 'Milo',
      solved: true
    },
    {
      points: 20,
      category: 'Recon',
      name: 'Snooping Around',
      hint: 'Registering a website posts a lot of information online. Sometimes there’s more out there than we realize. What did Milo leak making introsec.backdrifting.net?',
      author: 'Milo',
      solved: true
    },
    {
      points: 25,
      category: 'Recon',
      name: 'Out on the Internet',
      hint: 'We’ve hidden a flag on one of RPI’s RCS servers, in a directory everyone can access that’s not destroyed on reboot.',
      author: 'Milo',
      solved: true
    },
    {
      points: 40,
      category: 'Recon',
      name: 'The 90s are calling',
      hint: 'RPI used to give students free web hosting. Actually, I think they still do, but nobody uses it anymore. Well, except the RPISEC sysadmin.',
      author: 'Milo',
      solved: true
    },
    {
      points: 50,
      category: 'Recon',
      name: 'Corny Company',
      hint: `We’ve been working for weeks to break into Supercorn-corp and steal their latest formula. We’re close, we identified one of their key employees and started recording all his online interactions. Unfortunately the company is on to us and have put the whole system in total lockdown. Time is of the essence. Break into Mr. Blarf’s account before their security is impenetrable.

This is their password recovery system: 24978_password_reset.php

Attached are all the files we’ve managed to dig up on the employee. Good luck.`,
      author: 'Milo',
      solved: true
    },
    {
      points: 100,
      category: 'Recon',
      name: 'Its in that place where I put that thing that time',
      hint: 'There’s a 1337 Haxxor in RPISEC I want to find called Ketnex. He’s so cool he doesn’t even hang out on IRC, he leaves his bot to pick up messages for him. Can you get the flag from his website for me? He might have more than one, he’s just so cool.',
      author: 'Milo and Taylor',
      solved: true
    }
  ]
  dbo.collection('recon').insertMany(recon, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var steganography = [
    {
      points: 10,
      category: 'Steganography',
      name: 'Hidden Flag',
      hint: 'Can you find the flag in this file?',
      author: 'Milo',
      solved: true
    },
    {
      points: 15,
      category: 'Steganography',
      name: 'Pure Poetry',
      hint: 'We intercepted an email we think contains a hidden message. There’s nothing in the headers, so maybe the message is in the email body? We attached it as a txt for you to examine.',
      author: 'Milo',
      solved: true
    },
    {
      points: 20,
      category: 'Steganography',
      name: 'Decoding',
      hint: 'Find the flag!',
      author: 'Jazmyn',
      solved: true
    },
    {
      points: 30,
      category: 'Steganography',
      name: 'Stealthy Docs',
      hint: 'We used to hide messages by setting the font color to “white”. Now we’ve found a much sneakier way to hide things in word documents.',
      author: 'Milo',
      solved: true
    },
    {
      points: 30,
      category: 'Steganography',
      name: 'Blank Canvas',
      hint: 'Looks like there’s nothing here…',
      author: 'Milo',
      solved: true
    },
    {
      points: 50,
      category: 'Steganography',
      name: 'Great Music',
      hint: 'I downloaded my favorite song but its super low quality. Can you see what’s up with that?',
      author: 'Jazmyn',
      solved: true
    },
    {
      points: 50,
      category: 'Steganography',
      name: 'Something Extra',
      hint: 'My image viewer said there was something wrong with this comic, but it sure looks right to me!',
      author: 'Milo',
      solved: true
    },
    {
      points: 60,
      category: 'Steganography',
      name: 'Not the teeth',
      hint: 'My friend sent me a smiley emoji as a test of my stego skills. I can’t figure it out though, there’s no metadata or strings on the hexdump or anything! Can you help me?',
      author: 'Milo',
      solved: true
    },
    {
      points: 70,
      category: 'Steganography',
      name: 'Rainbow of Data',
      hint: 'There’s data in here! I just know it!',
      author: 'Milo',
      solved: true
    },
    {
      points: 100,
      category: 'Steganography',
      name: 'Gibberish Noises',
      hint: 'I got this sound file from a friend, and sometimes he likes to send me messages in esoteric ways. It doesn’t sound like any radio or TV signal I know, though…',
      author: 'Milo  (Inspired by Boston Key Party)',
      solved: true
    },
    {
      points: 200,
      category: 'Steganography',
      name: 'AmericaCorpNet Ransomware',
      hint: `AmericaCorpNet has been hacked! Cyber vigilantes have broken in and infected the network with ransomware. The backups were hit, too. Critical financial documents have been lost.

The ransomware authors have told us to send them 20 bitcoins and the compromised files. They did not ask for any other information or access codes. We don’t trust them to keep their word, and do not want to fund the criminals responsible.

Our own IT department is out of its league, can you help us? Attached is one of our most important files, please recover it!

Note: This challenge belongs in Crypto almost as much as Steganography, it was a tossup…`,
      author: 'Milo',
      solved: true
    }
  ]
  dbo.collection('steganography').insertMany(steganography, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var forensics = [
    {
      points: 5,
      category: 'Forensics',
      name: 'What IS it',
      hint: 'We recovered some data that should contain the flag, but it just looks like gibberish…',
      author: 'Milo',
      solved: true
    },
    {
      points: 10,
      category: 'Forensics',
      name: 'Too many files',
      hint: 'We recovered all of the files from a database containing the flag, but there’s too much data to sift through!',
      author: 'Milo (Based on challenge from Austin)',
      solved: true
    },
    {
      points: 15,
      category: 'Forensics',
      name: 'But is it -really- gone',
      hint: 'We had the flag! We had it right here! Then I accidentally hit ‘delete’ instead of ‘print’ and it’s gone! Can you get it back? I attached an archive of my flash drive, maybe it’s still in there…',
      author: 'Milo',
      solved: true
    },
    {
      points: 20,
      category: 'Forensics',
      name: 'Why won\'t strings work',
      hint: 'We know this garbage file has the flag in it, but we can’t get it out with strings!',
      author: 'Milo (Based on challenge from Austin)',
      solved: true
    },
    {
      points: 50,
      category: 'Forensics',
      name: 'Squash Surgery',
      hint: 'My flash drive got corrupted and won’t mount on my computer any more! I was able to image it with dd though. Can you please help me? I have some really important pictures on there!',
      author: 'Milo',
      solved: true
    },
    {
      points: 100,
      category: 'Forensics',
      name: 'Squash Surgery',
      hint: 'I could have sworn there were three files here!',
      author: 'Milo',
      solved: true
    }

  ]
  dbo.collection('forensics').insertMany(forensics, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var csaw = [
    {
      points: 50,
      category: 'CSAW',
      name: 'Sleeping Gaurd',
      hint: `This challenge was “Crypto 50 - Sleeping Guard” in CSAW quals 2016. It was written by Sophia D’Antoine, an awesome RPISEC alumnus.

Original description:

    Only true hackers can see the image in this magic PNG….`,
      author: 'CSAW Qualification 2014',
      solved: true
    },
    {
      points: 50,
      category: 'CSAW',
      name: 'Kill',
      hint: `This challenge was “Forensics 50 - Kill” in CSAW quals 2016.

Original description:

    Is kill can fix? Sign the autopsy file?`,
      author: 'CSAW Qualification 2016',
      solved: true
    },
    {
      points: 100,
      category: 'CSAW',
      name: 'Clams Dont Dance',
      hint: `This challenge was “Forensics 100 - Clams Don’t Dance” in CSAW quals 2016.

NOTE: Remove the comma from the flag before submitting it.

Original description:

    Find the clam and open it to find the pearl.`,
      author: 'CSAW Qualification 2016',
      solved: true
    }
  ]
  dbo.collection('csaw').insertMany(csaw, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var misc = [
    {
      points: 10,
      category: 'Misc',
      name: 'Apocalyptic Fridge',
      hint: `We got new fridge magnets, and got real bored last night…

Note: The flag should be entered all lower case`,
      author: 'Milo and Jazmyn and Taylor',
      solved: true
    },
    {
      points: 5,
      category: 'Misc',
      name: '',
      hint: '',
      author: 'Milo',
      solved: true
    },
    {
      points: 20,
      category: 'Misc',
      name: 'Cute Calendar',
      hint: 'I got a super cute Totoro calendar! Don’t you think it’s cute, too?',
      author: 'Milo',
      solved: true
    },
    {
      points: 30,
      category: 'Misc',
      name: 'Who sent you',
      hint: 'We found one of RPISEC’s secret admin panels! But it’s restricted to only allow access from their private server. Can you fool the admin panel?',
      author: 'Milo',
      solved: true
    },
    {
      points: 40,
      category: 'Misc',
      name: 'Golden Star for Best Language',
      hint: 'Such ascii, so pretty.',
      author: 'TinyCTF',
      solved: true
    },
    {
      points: 50,
      category: 'Misc',
      name: 'Words of the Ancients',
      hint: 'I promise there’s a flag in here eventually.',
      author: 'Fairgame 2015',
      solved: true
    }
  ]
  dbo.collection('misc').insertMany(misc, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })

  var physical = [
    {
      points: 5,
      category: 'Physical',
      name: 'Hope you\'re not scared of heights',
      hint: `Behold the clanging of industry, and the refuse of its labors!

The flag is on a ladder-accessible platform overlooking the trash heap. The flag is on the wall around the corner (opposite of how you’d face to climb the ladder), tucked away so people hopefully won’t disturb it.`,
      author: 'Milo',
      solved: true
    },
    {
      points: 5,
      category: 'Physical',
      name: 'C. S. Lewis',
      hint: 'There’s a tunnel that comes out in a supply closet. It’s kind of like Narnia! Head down the stairs and check the hole in the wall where a lightswitch cover belongs.',
      author: 'Milo',
      solved: true
    },
    {
      points: 5,
      category: 'Physical',
      name: 'Indiana Jones',
      hint: 'Go to the archaeology department. Back wall, middle to slightly right side of room, 2-ish feet off the ground. Have fun!',
      author: 'Milo',
      solved: true
    },
    {
      points: 5,
      category: 'Physical',
      name: 'Captain Crunch',
      hint: 'John Draper is a phone phreaker of the highest caliber. In honor of our phone phreaker predecessors, this flag is hidden in the last intact phone booth on campus. Sadly no dial tone.',
      author: 'Milo',
      solved: true
    },
    {
      points: 5,
      category: 'Physical',
      name: 'Home Sweet Home',
      hint: 'RPISEC has three rooms on campus. One for the advanced meetings, one for the Introsec meetings, and one for the core to meet and organize. Find the third room.',
      author: 'Milo',
      solved: true
    },
    {
      points: 5,
      category: 'Physical',
      name: 'Moria',
      hint: 'They dug too deep, and too greedily. We’re speaking of RPI’s student government, of course. Once you find your way down, come back up the stairs. We put the flag underneath the stairs at the base of one of the stairwells.',
      author: 'Milo',
      solved: true
    },
    {
      points: 5,
      category: 'Physical',
      name: 'Thank you, but I\'d rather die behind the chemical sheds',
      hint: 'Well, not sheds per se, but it’s at least a storage area in the chemistry department. They throw out weird and antiquated equipment here sometimes.',
      author: 'Milo',
      solved: true
    },
    {
      points: 5,
      category: 'Physical',
      name: 'Throne Room',
      hint: `At the peak of the tallest tower on campus there is a great window facing West.

We’ve put the flag on the underside of the box with a keyhole on that landing, so it’s less likely to be disturbed.`,
      author: 'Milo',
      solved: true
    }
  ]
  dbo.collection('physical').insertMany(physical, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    db.close()
  })
})
