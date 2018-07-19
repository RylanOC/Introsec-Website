# Introsec Website
A web app for the 2018-2019 Introsec club at RPI. This website hosts basic club information as well as a CTF style set of challenges for members to practice on.


## Setup Development Machine
1. Clone the repo `git clone https://github.com/RylanOC/Introsec-Website.git`

2. `cd Introsec-Website`

3. Open client
```bash
cd client
npm run dev
```

4. Open server
```bash
cd server
npm start
```

5. Open `http://localhost:8080` in browser



All challenges are stored in a mongodb database on the local machine. To setup your own challenges, simply install mongodb and create a document with the schema described in client/src/schemas/challenges.js