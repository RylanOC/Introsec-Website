#include <stdio.h>
#include <stdlib.h>
#include <string.h>
char *rpisec = "RPISEC";
void winning()
{
	printf("Gold Star!\n");
	system("/bin/cat ./flag.txt");
}
unsigned int hash(char* data)
{	
	int x;
	unsigned int hash_value = 1;
	srand(1627);
	for(x = 0; x < strlen(data); x++)
	{
		hash_value += data[x] ^ rand();
	}
	return hash_value;
}
int main(int argc, char const *argv[])
{
	char buf[100];
	setvbuf(stdout, NULL, _IONBF, 0);
	printf("Hash functions are the foundations of most data structures on the internet.\n");
	printf("Creating collisions can cause a lot of damage.\n");
	printf("Do that, get the flag.\n");
	printf("PS, don't brute force it. It won't work.\n");
	fgets(buf, 100, stdin);
	//remove the new line. 
	int ln = strlen(buf) - 1;
	if (buf[ln] == '\n')
    	buf[ln] = '\0';
    if( strcmp(buf, rpisec) == 0)
	{
		printf("haha nice try.\n");
		exit(0);
	}
	if(hash(rpisec) == hash(buf))
		winning();
	else
		printf("Sorry bud...\n");
	return 0;
}
