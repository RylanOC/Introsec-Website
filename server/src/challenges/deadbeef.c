#include <stdlib.h>
#include <stdio.h>
#include <string.h>

/*
 * compiled with:
 * gcc -O0 -fno-stack-protector lab2C.c -o lab2C
 */

void flag()
{
	printf("You did it!\n");
	system("/bin/cat flag.txt");
}

int main(int argc, char** argv)
{
	int set_me = 0;
	char buf[15];
	printf("Password: ");
	fflush(stdout);
	fgets(buf, 30, stdin);

	if(set_me == 0xdeadbeef)
	{
		flag();
	}
	else
	{
		printf("Not authenticated.\nset_me was %d\n", set_me);
	}

	return EXIT_SUCCESS;
}
