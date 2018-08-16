#!/usr/bin/env perl
use warnings;
use strict;
use Socket;

#
# Oh no! This program uses start of the art obfuscation techniques to hide its activation code!
# How will we ever get the flag sent back by the server?
#

$| = 1;
my $p = 1234;
$_ = 4567 % 126;
$_ .= $_;
push @ARGV, $_;
$_ = "0p3n s35am3!";
socket( Y, PF_INET, SOCK_STREAM, (getprotobyname('tcp'))[2] );
$p = pop;
connect( Y, pack_sockaddr_in($p, inet_aton("ctf.backdrifting.net") ) ) or die "$!";
s/[\d\s]//g;
s/(.)/ord($1)/eg;
defined(send(Y, "$_\n", 0)) or die "$!";
sleep($| * 5);
close Y or die "What a calamity!\n";
