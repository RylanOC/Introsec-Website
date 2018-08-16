#!/usr/bin/env python

encoded = "gnbc~^7zV;xSo=|dNqameb'e"
password = raw_input("Enter password: ")
cypher = ""
for x in range(0, len(password)):
	cypher += chr(ord(password[x]) ^ (x + 1))

if( cypher == encoded ):
	print "Correct password!"
else:
	print "Password failed! Learn more crypto!"
