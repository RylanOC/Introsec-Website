#!/usr/bin/env bash
sleep 5 # wait 5 seconds for mongodb to finish startup
/usr/local/bin/node /var/www/html/Introsec-Website/server/src/app.js >> /home/rylan/introsec.log
