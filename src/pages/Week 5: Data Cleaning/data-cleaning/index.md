---
title: "Cleaning Data in Python"
description: A guide on dealing with a wide variety of unstructured data
date: '2018-12-26'
---

## Introduction
A file is just a sequence of bytes. Everything in UNIX is a file. This is profoundly deep idea. Text files are files, directories are files, even commands like ls or pwd are just files. 

Disk storage allows us to provide persistent storage. The OS abstracts this to be known as files. These files are arranged into a tree by folder/directory structure. Whenever we want to read or write to a file, we do this through system calls.

The applications that the user interacts with are "managed" by the OS which then helps us interface with the hardware. Here, the OS doesn't trust the user and doesn't give them direct access to the hardware. System calls are ways for programs to talk to the hardware and through these system calls, we can set standards on how we want these interactions to occur.

For files, they aren't necessarily stored in contiguous memory but in fact distributed across the disk containing information on them. Devices themselves are also represented as files.

---

### Files
A FILE is a struct that is defined in <stdio.h>. We have that feof() helps test whether are we at the end of file indicator. 

When we read stuff in, they can be either buffered (input/output accumulated into a block then passed) or unbuffered where we just pass input/output on right away.

### File Pointers
File helps to store persistent data! Hence, when we terminate programs, we can still have information relating to the stuff we just did in that program. All file manipulation functions are inside <stdio.h>.  All of these require file pointers as arguments.

#### fopen
fopen(): This opens a file and returns a file pointer to it. We can check the return value of this and if it is NULL, then that means that file does not exist. Hence, we pass in a file and an operation we want to undertake.

```C
FILE* fp = fopen(<filename>, <operation>);

// Operation can be "w', "r", "wb", "a" etc depending on what mode you want to operate the file in.
```

We now have a pointer called fp that points to our file.

When we begin a program, special files are opened for us. These files are:
1) stdin
2) stdout
3) stderr



#### fclose
Takes in a file pointer and closes the file. You should do this to be safe.

```C
fclose(<file pointer>);
```

#### fgetc
This means file, get a character. Get the next character of that file and store it into a variable.

```C
char our_char = fgetc(<file pointer>);

// Example
char our_char = fgetc(fp);
```

In order for this to work, we should've have already opened the file pointer. Hence, we get the next character from our file.

Hence, with these 3 operations, we can now open a file and read in everything from it character by character:

```C
FILE *fp = fopen("my_file.txt", "r");

char ch;
while((ch = fgetc(fp)) != EOF)
{
  printf("%c\n", ch);
}
```
This will keep getting the next character and printing it as long as it is not the EOF character. This is actually what the linux command cat does!

#### fputc
This is the equivalent to writing/appending specific character to a file that's being pointed to. Note that the file pointer we pass in must be in either write or append more!

```C
fputc(<character>, <file pointer>);

// Example
fputc('c', fp);
```
So now we can copy contents from one file over into another file using this new command to help us!

```C
FILE *fp = fopen("my_file.txt", "r");

char ch;
while((ch = fgetc(fp)) != EOF)
{
  fputc(ch, fp_two);
}
```
This writes it out into another file pointer! This is the cp command in linux!

#### fread
This is similar to fgetc except now it's a generic form in which we can get _any_ amount of information we want. This reads in a quantity of memory where each is a certain size and stores them into a buffer.

```C
fread(<buffer>, <size>, <qty>, <file pointer>);
// Note that file pointer must be in read mode!!
```
Hence, an example could be, read 6 "things" of size 4 bytes each into a buffer. Hence, this is effectively asking us to read in 6 ints into our buffer as an int is 4 bytes. Hence, we can now read in an arbitrary amount of things and stores it into a buffer.

```C
int arr[10];
fread(arr, sizeof(int), 10, file_pointer);
```
Hence, this allows us to read in 10\*sizeof(int) amount of information from the file_pointer and storing that temporarily into our buffer arr. Recall arr (an array) is just a pointer to the first element in our array and hence we are passing in a pointer when we do this. We could also pass in something that has been malloc'd for our buffer.

```C
double *arr2 = malloc(sizeof(double) * 80); // Creates an array of 80 elements.
fread(arr2, sizeof(double), 80, file_pointer); // Reads in 80 doubles from our file and temporarily stores it into our buffer.

// If we wanted to store it into a buffer like a character, then we need to do &character_variable.
```

#### fwrite
This is similar to fputc but now generic size! Similar idea to fread.

```C
int arr[10];
fwrite(arr, sizeof(int), 10, ptr);
// Note that ptr must be in write or append mode only.
// Don't forget to flush too.
fflush(ptr);
```

#### fseek
This allows you to move forward and backwards through the file.

```C
fseek(<file pointer>, <offset>, <whence>)

// An example to go to the end of the file is

fseek(fp, 0, SEEK_END); // We are now at the end!

fseek(fp, 0, SEEK_SET); // Move to start of the file!

long position = 10;
fseek(fp, position, SEEK_SET); // Move to position "position" 10 in the file
```

#### ftell
This tells us where in the file we currently are. In particular, it gives you the byte position we are currently at.

#### rewind
This allows us to rewind back to the start of the file!


#### ferror
Indicates whether an error has occurred in working with the file.

#### fgets
Reads one line of input and returns a string.

#### fflufsh
Input Stream: Disard any data in the buffer that has not been processed yet.
Output Stream: Force write all the data in the buffer. Make sure everything has been written out.

---

#### File Descriptors
Every time we open a file, there is a file descriptor. This is just a non-negative integer associated with the file. This descriptor describes the state of the file i.e whether is it opened or close. File descriptors helps us keep track of things.

Hence, we also have commands such as:

#### Write

```C
write(int fildes, buf, size_t num_bytes);
```
Hence, if we wanted to print something to stdout

```C
write(1, "Hello!", 7);
// Recall 1 is write/stdout
```

#### Read
This is the same ideas as writing but now we can read in from stdin.

```C
read(int fildes, void *buf, size_t nbyte);
// Same idea as writing

char buf[5];
read(0, buf, 4);
```
