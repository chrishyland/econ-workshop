---
title: "Basics of Programming"
description: First look into Python and Programming
date: '2018-12-30'
---

## Introduction

Throughout these workshops we are going to be teaching you about programming using a language known as [Python](https://www.programiz.com/python-programming). Python is a versatile programming language and currently the [third most popular language](https://hackernoon.com/top-3-most-popular-programming-languages-in-2018-and-their-annual-salaries-51b4a7354e06) in the world. Due to its versatility, it is used in a wide range of applications from analysing data, machine learning, web development, and more. Furthermore, it is ranked as the [most popular tool](https://towardsdatascience.com/r-vs-python-vs-matlab-vs-octave-c28cd059aa69) used in analytics/data science by practioners by a wide margin, with R coming in second. Python's popularity stems from its simple programming syntax and the number of developers who contribute to the different packages you can use in the Python ecosystem (more on what this means later). We are going to be utilising a tool known as [Jupyter Notebooks](https://www.google.com/search?ei=DDYoXN7mDsnTvwTIgLLACA&q=what+is+jupyter+notebook+beginners&oq=what+is+jupyter+notebook+beginners&gs_l=psy-ab.3..33i22i29i30.2714.3837..3972...0.0..0.125.996.5j5......0....1..gws-wiz.......0j0i71j0i20i263.JhkvlfrClvM) which allows us to create and share documents with code easily and in a presentable visual format.

Learning how to program is just like learning a real language. The only way you can learn is by *doing*, and it is really important to understand that you will not learn anything unless you activley try and get involved in the examples we present. You will not become an expert in Python by the end of these workshops, but you will become more literate, and in the same way that people who can speak Italian can understand parts of Spanish. These workshops will help your overall ability to program and work with data in a coherent, efficient manner.

## Why should you be here? (and why should you stay?)

1. *Become more programming literate*: This is invaluable for your honours theses or any research project you may have to do.
2. *Your Resume*: Employers are becoming increasingly interested in graduates who are able to program or at least familiar with it. 

## 1.1 Data Types and Data Structures

### Integers

Integers are one of the most fundamental data types in Python. Integers are just whole numbers. In Python, as with in many other languages, we are able to assign values to variables that we define:


```python
x = 100

print(x)

type(x)
```

    100





    int



We can perform basic mathematical operations using these variables:


```python
x = 5

y = 6

z = x + y 

print(z)
print(x + y) # We don't NEED to define a new variable
```

    11
    11


### Strings

Strings are an object that are *generally* used to represent text information. In the same way that we can assign an integer to a variable ```x```, we can do the same with strings. When we are working with strings, it is important to remember to use the quotation marks ' or ".



```python
x = 'Hello World'

print(x)
type(x)
```

    Hello World





    str



Strings are **NOT** treated the same way as integers. It might not be clear right now why this is a problem, but we will see an exercise where it is. 

Just like with integers, we can combine strings together. This is known as _concatenation_.


```python
x = "cat"
y = "dog"

print(x + y)
```

    catdog


Something worthwhile to point out is that you cannot concatenate a string and an integer together.


```python
quantity = 5
units = " kilos"

print(quantity + units)
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-9-5d1488afa540> in <module>()
          2 units = " kilos"
          3 
    ----> 4 print(quantity + units)
    

    TypeError: unsupported operand type(s) for +: 'int' and 'str'


What we have to do instead is to turn the integer quantity into a string using the _str_ command before we can concatenate them together.


```python
print(str(quantity) + units)
```

    5 kilos


### Floats

Floats are similar to Integers, but they involve decimal points. They are used when we need more precision


```python
z = x/y

type(z)
```




    float



### Lists

A 'list' is a collection of arbitrary objects, we define a list using the square brackets:


```python
x = [1, 2, 3, 4, 5]
print(x)

y = ['Hello', 'World']
print(y)
```

    [1, 2, 3, 4, 5]
    ['Hello', 'World']


We can perform functions on lists, for example we may be interested in how many elements are within the list, or we may be interested in a specfic object within the list. These are very basic examples and there are far more functions, but for now these will do.


```python
len(x)
x[1] # Python indexing begins at 0!
```




    2



Notice that in Python and other programming languages, you start counting from 0 rather than 1. In our list x, the value 1 is actually located at the index 0 whilst the value 2 is located in the index 1.


```python
print("The value at index 0 is " + str(x[0]))
print("The value at index 1 is " + str(x[1]))
```

    The value at index 0 is 1
    The value at index 1 is 2


### Dictionaries

Dictionaries are mappings of unique keys to values, we define a dictionary using the curly brackets: Suppose here we have information about students and their favourite fruit.


```python
x = {'Varun': 'Apples', 'Chris': 'Mangos', 'Pat': 'Banannas'}
```

The unique 'key' is the first entry and the value is the second. If we assign a value to a key, we can retreive the value by reffering to the key. Suppose I want to know what Chris' favourite fruit is:



```python
x['Chris']
```




    'Mangos'



Notice that it doesn't work the other way around


```python
x['Mangos']
```


    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    <ipython-input-13-54d0ee1c03d4> in <module>()
    ----> 1 x['Mangos']
    

    KeyError: 'Mangos'


We can set anything to be a value, integers, floats, lists, and even more dictionaries!

Here, we have 2 dictionaries containing favourite fruits for 2 groups of people. We can combine these dictionaries by placing them into another dictionary.


```python
boys_dict = {'Varun': 'Apples', 'Chris': 'Mangos', 'Pat': 'Banannas'}
girls_dict = {'Rowena': 'Durians', 'Jan': 'Pears', 'Sam': 'Kiwis'}

nested_dict = {"Girls": girls_dict, "Guys": boys_dict}
```


```python
nested_dict
```




    {'Girls': {'Rowena': 'Durians', 'Jan': 'Pears', 'Sam': 'Kiwis'},
     'Guys': {'Varun': 'Apples', 'Chris': 'Mangos', 'Pat': 'Banannas'}}




```python
nested_dict['Girls']
```




    {'Rowena': 'Durians', 'Jan': 'Pears', 'Sam': 'Kiwis'}



## 1.2 Functions, For Loops and If Statements

Functions, 'for' loops and 'if' statements are by far the most ubiquitous and useful commands in your programming arsenal. They allow us to solve more complicated (and interesting) problems by creating scripts that are both recursive and iterative. They also allow us to make our code more succinct, generalisable and efficient.

### Functions

A function is a piece of resuable code that can be used to perform some sort of action. In Python there are 'built in' functions -- which we have seen above, but there are also *user-defined functions*. These are functions that we write ourselves. We can start by defining a function:


```python
def my_function(x):  # We need to specify a function handle, and some arguments
    y = x*2  # Multiply x by 2
    return (y)
```

This function takes in some object ```x``` as an input, and doubles it. It is clear from this then that the object ```x``` must be an integer or float. 


```python
my_function(5)
```




    10



We can also define functions with respect to strings:


```python
def exclamation(phrase):
    y = phrase +'!'
    return (y)
```


```python
exclamation('I want to go home')
```




    'I want to go home!'



A function doesn't necessarily have to return things either. These are known as _void_ functions.


```python
def strange_func(name):
    x = "Hi there " + name
```


```python
strange_func("Charles")
```

Lets explore by what we mean by _returning_ variables in a function. Recall our earlier function double things. Let's assign whatever is returned by that function to a variable.


```python
value = my_function(5)
print(value)
```

    10


So you see that value has the number 10 associated with it, which came from the function. Let's look at void functions.


```python
value_two = strange_func("Charles")
print(value_two)
```

    None


Here we have None associated with our value_two variable, unlike in our previous example. This highlights what happens when we don't return variables in our functions.

### For Loops

It is hard to understate the importance of For Loops in any programming language. They allow us to create iterative blocks of code, meaning we can 'cycle' through elements of an object. Let's suppose that we are working with a list first. **These are fundamental**.


```python
numbers = [1,2,3,4,5]
print(numbers)
```

    [1, 2, 3, 4, 5]


I want to apply some complex function to each element of my list. In order to do this, I need to first define a function and then use a for loop.


```python
def complex_function(x):
    y = x + x**5 + (3*x - 5)**2
    return(y)

```


```python
for number in numbers:
    out = complex_function(number)
    print(out)
```

    6
    35
    262
    1077
    3230


Perhaps a more practical example involves applying this function and then 'storing' them in a list so that I can do something else with these values


```python
out_list = []

# Note that the choice of index (in general) does not matter, 
# there are some choices which cause problems but you will recieve an error message.
for element in range(0, len(numbers)): 
    out = complex_function(numbers[element])
    out_list.append(out)
    
print(out_list)
                    
                    
                    
```

    [6, 35, 262, 1077, 3230]


### If Statements

If statements act like a yes/no statement. If a condition is met, we can program the script to carry out an action. We can also specify what happens if the statement does not hold, we can also combine them with for loops and functions we have defined ourselves.


```python
numbers = [0,1,2,3,4,5]

for element in numbers:
    if element == 2: # == is a boolean logical
        print('Great')
    else:
        print('Not Great')
```

    Not Great
    Not Great
    Great
    Not Great
    Not Great
    Not Great



```python
for element in numbers:
    if element in [1,3,5]:
        print('Great')
    else:
        print('Not Great')
```

    Not Great
    Great
    Not Great
    Great
    Not Great
    Great


It is worth highlighting the difference between the = and == operator.

= is used to assign a value to variable whilst == is used to check whether does the variable equal to a certain condition.


```python
# Assigns dog to x.
x = "dog"

# Check if x is the word "cat"
if x == "cat":
    print("Meow")
    
# Check if x is the word "dog"
if x == "dog":
    print("Woof")
```

    Woof


## 1.3 Pandas, CSV Files and Working With Real Data

### Python Packages

Sometimes we need to import 'packages' in order to utilise functions that are not built into the language. One of the most important ones is known as **Pandas**. Pandas is extremley useful for working with and analysing data. Perhaps the most useful feature of this package is it allows us to import data from sources such as .csv files into Python objects known as 'DataFrames'. These DataFrames are made up of rows and columns of data -- similar to other programs such as Excel or R.

A little bit of trivia name of the package comes from the econometrics term -- 'Panel Data'.





```python
import pandas as pd

df = pd.read_csv('train.csv')
df
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>PassengerId</th>
      <th>Survived</th>
      <th>Pclass</th>
      <th>Name</th>
      <th>Sex</th>
      <th>Age</th>
      <th>SibSp</th>
      <th>Parch</th>
      <th>Ticket</th>
      <th>Fare</th>
      <th>Cabin</th>
      <th>Embarked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>0</td>
      <td>3</td>
      <td>Braund, Mr. Owen Harris</td>
      <td>male</td>
      <td>22.0</td>
      <td>1</td>
      <td>0</td>
      <td>A/5 21171</td>
      <td>7.2500</td>
      <td>NaN</td>
      <td>S</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>Cumings, Mrs. John Bradley (Florence Briggs Th...</td>
      <td>female</td>
      <td>38.0</td>
      <td>1</td>
      <td>0</td>
      <td>PC 17599</td>
      <td>71.2833</td>
      <td>C85</td>
      <td>C</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>1</td>
      <td>3</td>
      <td>Heikkinen, Miss. Laina</td>
      <td>female</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>STON/O2. 3101282</td>
      <td>7.9250</td>
      <td>NaN</td>
      <td>S</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>1</td>
      <td>1</td>
      <td>Futrelle, Mrs. Jacques Heath (Lily May Peel)</td>
      <td>female</td>
      <td>35.0</td>
      <td>1</td>
      <td>0</td>
      <td>113803</td>
      <td>53.1000</td>
      <td>C123</td>
      <td>S</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>0</td>
      <td>3</td>
      <td>Allen, Mr. William Henry</td>
      <td>male</td>
      <td>35.0</td>
      <td>0</td>
      <td>0</td>
      <td>373450</td>
      <td>8.0500</td>
      <td>NaN</td>
      <td>S</td>
    </tr>
    <tr>
      <th>5</th>
      <td>6</td>
      <td>0</td>
      <td>3</td>
      <td>Moran, Mr. James</td>
      <td>male</td>
      <td>NaN</td>
      <td>0</td>
      <td>0</td>
      <td>330877</td>
      <td>8.4583</td>
      <td>NaN</td>
      <td>Q</td>
    </tr>
    <tr>
      <th>6</th>
      <td>7</td>
      <td>0</td>
      <td>1</td>
      <td>McCarthy, Mr. Timothy J</td>
      <td>male</td>
      <td>54.0</td>
      <td>0</td>
      <td>0</td>
      <td>17463</td>
      <td>51.8625</td>
      <td>E46</td>
      <td>S</td>
    </tr>
  </tbody>
</table>
<p>891 rows × 12 columns</p>
</div>



### Creating an indicator variable

You can work with rows and columns of the DataFrame individually, for example with this one we may be interested in creating an indicator variable for sex. In order to do so we are going to utilise for loops and if statements.


```python
indicator = []

for row in range(0,len(df)):
    if df['Sex'][row] == 'male':
        indicator.append(1)
    else:
        indicator.append(0)
```

There are many other and in fact computationally more efficient ways to do this in Python, but this method works. 


```python
df['Dummy'] = pd.DataFrame(indicator)
df
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>PassengerId</th>
      <th>Survived</th>
      <th>Pclass</th>
      <th>Name</th>
      <th>Sex</th>
      <th>Age</th>
      <th>SibSp</th>
      <th>Parch</th>
      <th>Ticket</th>
      <th>Fare</th>
      <th>Cabin</th>
      <th>Embarked</th>
      <th>Dummy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>0</td>
      <td>3</td>
      <td>Braund, Mr. Owen Harris</td>
      <td>male</td>
      <td>22.0</td>
      <td>1</td>
      <td>0</td>
      <td>A/5 21171</td>
      <td>7.2500</td>
      <td>NaN</td>
      <td>S</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>Cumings, Mrs. John Bradley (Florence Briggs Th...</td>
      <td>female</td>
      <td>38.0</td>
      <td>1</td>
      <td>0</td>
      <td>PC 17599</td>
      <td>71.2833</td>
      <td>C85</td>
      <td>C</td>
      <td>0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>1</td>
      <td>3</td>
      <td>Heikkinen, Miss. Laina</td>
      <td>female</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>STON/O2. 3101282</td>
      <td>7.9250</td>
      <td>NaN</td>
      <td>S</td>
      <td>0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>1</td>
      <td>1</td>
      <td>Futrelle, Mrs. Jacques Heath (Lily May Peel)</td>
      <td>female</td>
      <td>35.0</td>
      <td>1</td>
      <td>0</td>
      <td>113803</td>
      <td>53.1000</td>
      <td>C123</td>
      <td>S</td>
      <td>0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>0</td>
      <td>3</td>
      <td>Allen, Mr. William Henry</td>
      <td>male</td>
      <td>35.0</td>
      <td>0</td>
      <td>0</td>
      <td>373450</td>
      <td>8.0500</td>
      <td>NaN</td>
      <td>S</td>
      <td>1</td>
    </tr>
    <tr>
      <th>5</th>
      <td>6</td>
      <td>0</td>
      <td>3</td>
      <td>Moran, Mr. James</td>
      <td>male</td>
      <td>NaN</td>
      <td>0</td>
      <td>0</td>
      <td>330877</td>
      <td>8.4583</td>
      <td>NaN</td>
      <td>Q</td>
      <td>1</td>
    </tr>

  </tbody>
</table>
<p>891 rows × 13 columns</p>
</div>

--- 
# Resources
Download the notebook [here](../../../../static/Python-Workshop-1.ipynb)

