#include <string.h>
#include <sys/mman.h>
#include <unistd.h>

// if this is remote, distribute the source, *not* the binary
// if this is local privesc, chmod -r the binary to prevent the trivial solution with strings
#ifndef FLAG
#define FLAG "placeholder{compile the program with -DFLAG='\"flag{something_worth_points}\"'}"
#endif

char* calculator =
    "write_nonewline = __import__('sys').stdout.write\n"\
    "while 1:\n"\
    "  try:\n"\
    "    write_nonewline('Enter some arithmetic: ')\n"\
    "    print('The result is: %s' % (input(),))\n"\
    "  except (KeyboardInterrupt, EOFError):\n"\
    "    break\n"\
    "print('')\n";

int main(int argc, char** argv) {
    // `man 2 mmap` notes that the mapping persists across fork, but neglects to mention that it does *not* persist across exec*
    char* flag = mmap((void*)0x12345000, 0x1000, PROT_READ | PROT_WRITE, MAP_PRIVATE | MAP_FIXED | MAP_ANONYMOUS, -1, 0);
    if(flag == MAP_FAILED) {
        perror("mmap failed");
        return 1;
    }
    // whoever compiles the flag is assumed trusted, and this would pagefault harmlessly on overflow anyway
    strcpy(flag, FLAG);

    int some_pipes[2];
    if(pipe(some_pipes)) {
        perror("pipe failed");
        return 1;
    }
    write(some_pipes[1], flag, strlen(FLAG));
    close(some_pipes[1]);
    if(dup2(some_pipes[0], 42) != 42) {
        perror("dup2 failed");
        return 1;
    }
    execl("/usr/bin/python2", "python", "-c", calculator, 0);
    return 1; // execl shouldn't return
}
