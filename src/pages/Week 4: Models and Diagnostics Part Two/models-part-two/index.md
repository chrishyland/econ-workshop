---
title: "Statistical Models in Python Part Two"
description: Running Models and Diagnosing them in Python
date: '2018-12-27'
---

## Why Functional Programming?

Throughout the your programming career, we've mainly been approaching coding in Python from an object oriented perspective. Usually, what this means is that we have objects whose states changes over time (e.g. pokemon object is levelling up)

Sometimes, we can design programs which can solve things purely through functions. tl;dr: when we don't need objects to design the program. This is where Functional programming comes into play!

---

## Let's get into it!

Functional programming is STATELESS aka they rely only on their given inputs to produce an output.

So here's an example. We first create a global variable `X`.
```python
X = 5
```

We then have the 2 following functions.
```python
def non_func_sum(y):
    return y + X

def func_sum(x, y):
    return x + y
```
These obviously will give us the same answer if we let x=X=5 and y=10. However, the first function uses a global variable (a state) to compute it whilst the second one doesn't. Hence, the second function is an example of functional programming. Pure functions have the advantage of not suffering from side effects of states occurring (e.g. if you accidently change X, you're in trouble).

Now that we've gotten that out of the way, we need to make a quick detour in lambda expressions which are a good example of functional programming and will see how all this is pratical.

---

## Lambda Functions

Lambda functions are anonymous functions. In other words, they are functions that don't have a name :( 

Generally, they tend to be a 1 line function which then can be used within other functions to do things.

#### Let's write our own lambda function!

If we wanted to write a function that takes in a number and adds 10, we normally go:
```python
def add_ten(x):
  return x + 10
```

This is a a bit tedious and kinda of a waste of code to write. We can be more concise with this by going:

```python
lambda x: x + 10
lambda x,y: x+y
```

This creates a lambda function where we take in a variable x and return x+10. Hence, the keyword lambda here lets Python know we are defining a lambda function, the new few variable before the : are the arguments for our lambda function, and the expression after the : is the code we execute for our lambda expression. Running this actually doesn't do anything. We need to actually assign it to a variable so we can start using it.

```python
ma_new_func = lambda x: x + 10

print(ma_new_func(30))
```
> 40

Yay it works!. Note that we do not have to type the return command here (e.g. return x+10).

---

## Building things with lambda expressions.

We can also place lambda functions into other functions. The sort function can take in an argument on HOW you want the list to be sorted. Suppose we have the list of tuples like this: 
```python
unsorted = [('b', 6), ('a', 10), ('d', 0), ('c', 4)]
```

Let's say we want to sort it by the characters and also another list sorted by integers. With lambda expressions, we can just go:

```python
print(sorted(unsorted, key=lambda x: x[0]))
print(sorted(unsorted, key=lambda x: x[1]))
```
 
The key part is the lambda function that helps us get the 0th or 1st index in the tuple which we then sort on.

**So to summarise lambda functions, it has this form:**
```python
# lambda variable: operation to perform
```
As you seen earlier, we can also have multiple arguments in our lambda expression by going:

```python
sum_func = lambda x, y: x + y 
print(sum_func(10, 50))
```

---

## Bringing it all together!

We have seem lambda functions and how we can put them into other functions. Now let's see what sorts of functions we can put these lambda functions into!

### FILTER
This helps you to filter out a list
```python
l = [1, 2, 3, 4]

# We need a list or else we just get back a filter object.
a = list(filter(lambda x: x % 2, l))
print(a)
```
> [1, 3]

Our new list a is a filtered list! Note that what we get back from our the filter function is actually a filter object, hence we turn it into a list by going list() in order to get back a list. This will be a common thread in other functions we will see shortly.

### MAP

Applies a function onto every element in our collection. It may be a bit trippy since we are passing in a function as a argument but that's valid! Functions that lets us do this is called a first-class function. So in particular, map takes in a collection and a function. It then applies that function on each element in that collection.

```python
print("Map function")
l = [1, 2, 3, 4, 5]
p = list(map(lambda x: x+1, l))
print(p)
```
> [2, 3, 4, 5, 6]

The list has been updated! However, be aware of some caveats.

```python
x = list(map(lambda x: x+3, l))
print(l) # this is still the same... why... 
```
> [1, 2, 3, 4, 5]

Note that the map function doesn't actually alter the original list. It gives us back a map object with the new altered list which we then turn into a list.

Note that we can do a more pythonic way of this by using list comprehensions.
```python
# Map alternative.
add_10 = [x + 1 for x in l]
print(add_10)
```

### ZIP
This merges collections into tuples and this whole thing is an iterable!
```python
l = [1, 2, 3, 4]
k = [9, 8, 7, 6]
z = ['a', 'b', 'c']

f = zip(l, k, z)
for x in f:
    print(x)
```  
This is what each element from the iterator will expand to:
    
> f[0] = (1, 9)
  f[1] = (2, 8)
  f[2] = (3, 7)
  f[3] = (4, 6)

In other words, we are doing something like this:
```python
p = list([(1, 9), (2, 8), (3, 7), (4, 6)])
```

### REDUCE

Reduce takes in an iterable and reduces it to a single value.

```python
from functools import reduce
my_list = [10,20,30,40]
value = reduce(lambda a,b: a+b, my_list)
print(value)
``` 
> 100

What this does is that it:
- Sums 10+20 = 30. 
- Then it does 30+30 = 60. 
- Finally 60+40 = 100.

Max, min etc is an example of reduce as they take in an iterable and gives us back a single value.

---

# Conclusion

Hopefully this post achieved 2 things.
1. Beginners are able to take away some nifty little things or understand what's happening behind some of the functions they use.

2. Actual functional programmers have not gone blind from reading this.

### Credits: 
- https://www.dataquest.io/blog/introduction-functional-programming-python/
- INFO1110 Course at USYD.