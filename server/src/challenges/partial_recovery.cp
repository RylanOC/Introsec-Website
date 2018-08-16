#include <iostream>
#include "flagLib.h"

char rotate(char s, int distance)
{
	int offset = 0;
	if( s >= 'A' && s <= 'Z' )
		offset = 65;
	if( s >= 'a' && s <= 'z' )
		offset = 97;
	if( s >= '0' && s <= '9' )
		offset = 48;
	if( offset == 0 )
		return s;
	s -= offset;
	s += distance;
	while( s < 0 )
	{
		if( offset == 48 )
			s += 10;
		else
			s += 26;
	}
	if( offset == 48 )
		s = s % 10;
	else
		s = s % 26;
	s += offset;
	return s;
}

std::string encode(std::string data)
{
	for( int i = 0; i < data.length(); i++ )
		data[i] = rotate(data[i], i + 1);
	return data;
}

std::string decode(std::string data)
{
	for( int i = 0; i < data.length(); i++ )
		data[i] = rotate(data[i], -1 * (i + 1));
	return data;
}

int main()
{
	std::string username, password;
	/*
		We received only a prototype of the server source code, we believe more
		code was added where this comment is.
	*/
	if( decode(username) == "administrator" && decode(password) == "god" )
		std::cout << encode("Authentication confirmed, loading secret data: " + getFlag()) << std::endl;
	else
		std::cout << encode("Authentication failed, terminating connection.") << std::endl;
	return 0;
}
