**About the User:**

We are going to study Exception Handling in Python from Tanmay's real world scenario.Tanmay is a fashion designer by profession and he loves designing products using human centred approach

` `Let us begin by reading Tanmay journey as  described below:

## Scenario Image 1-6

| 1![](images/Aspose.Words.593369eb-b8e0-426a-ac44-4668e69d30d6.001.png) | 2![](images/Aspose.Words.593369eb-b8e0-426a-ac44-4668e69d30d6.002.png) | 3![](images/Aspose.Words.593369eb-b8e0-426a-ac44-4668e69d30d6.003.png) |
| :-: | :-: | :-: |
|4![](images/Aspose.Words.593369eb-b8e0-426a-ac44-4668e69d30d6.004.png)|5![](images/Aspose.Words.593369eb-b8e0-426a-ac44-4668e69d30d6.005.png)|6![](images/Aspose.Words.593369eb-b8e0-426a-ac44-4668e69d30d6.006.png)|

Image 1 describes that It was a long holiday weekend and hence Tanmay was partying the whole sunday night and came back home at 2 AM in the midnight, he forgets to set up his alarm and wakes up late in the in the morning at 10:00 AM, usually he wakes up at 8:30 AM , now since he is running 1 hour 30 Min late , Hence he decided to pick something outside for his breakfast. Image 2 describes that As Tanmay is an Italian food lover, he decides to have pizza for his breakfast because he thought that pizza would take less preparation time and he can have pizza while travelling to the office in his car.So, He visits a nearby store to eat pizza. Image 3 describes that Tanmay has heard a lot of craze about “pineapple on pizza”, so he decided to order pineapple pizza.Image 4 describes that At the ordering counter, When Tanmay asks for pineapple pizza, the waiter politely denies that there is no such thing termed as “pineapple pizza” exists in their store, and in fact the waitress also says that no one except tanmay has enquired for pineapple pizza and hence she said that “pineapple pizza is an **exception**!”. Image 5 describes that Since pineapple pizza was not available at the store,Tanmay was sad, but he suddenly started thinking about the waitress word i.e Exception . He started thinking about what is an exception? And then decides to study more about exception

Now let us study more about exceptions in python!

## What are exceptions in python?

Now as Tanmay is more curious to learn about what is an exception? Let's learn about exceptions in python.There is one famous quote by Benjamin Franklin that “If you fail to plan, you are planning to fail”. The same is applicable for computer engineers because Every intruder finds a way to break into your code. Using Exceptions we can manage these problems in a responsible way.

For eg

- If someone asks you to divide a number by zero, you can throw an exception and letting them know that they cannot divide a number by zero
- In the above example, Tanmay asks for a pineapple pizza and hence the employee at the pizza store declined his bizarre suggestion

All the scenarios explained above are examples of Exception. An Exception is a object with description of what went wrong , followed by a traceback of what went wrong
```py
marks=100
a=marks/0
print(a)
---------------------------------------------------------------------------
ZeroDivisionError                         Traceback (most recent call last)
<ipython-input-1-bd8d0720efdd> in <module>
      1 marks=100
----> 2 a=marks/0
      3 print(a)

ZeroDivisionError: division by zero
```


If we look at the code displayed above, we have initialized a variable named as “marks” with the value 100, then we are trying to divide the number 100 by 0, hence the python raised an ZeroDivisionError Exception stating that you cannot divide a number by zero.

## So what is the difference between an Error and an Exception?

- The major difference between Errors and Exceptions are Error are the ones which cannot be handled by the programmer, whereas Exceptions are the ones which can be handled by the programmer

The following are the most common types of Errors:

1) Syntax Error
```py
age=int(input('Enter Your Age'))
if age>18
    print('you are eligible for voting')
else
    print('you are not eligible for voting')
File "<ipython-input-2-7fb28bbb3d1c>", line 2
    if age>18
             ^
SyntaxError: invalid syntax
```

- The above code displays an example of Syntax Error
- In the above image, we have a piece of code and in that piece of code after “if and else statement” we have a colon missing, those errors are called as syntactical errors or we can call them compile time errors. 
- We would be getting these type of error during compile time
- A syntax error means that you did not follow the rules and standard which are set by python while writing code.
1) Logical Errors
- This Error is caused due to incorrect business logic applied by the programmer
- In this Error, our code will work fine , because there are no syntax errors.
- Our code will also get compiled successfully,and it will give the output, but the output obtained will be incorrect

(c) Run Time Errors

- These Error occurs due to incorrect input obtained from the user
- The moment you get run time error, your execution stops

The following are the most common types of Exception:

1) ZeroDivisionError 
1) NameError 
1) TypeError
1) ValueError
1) IndexError
1) KeyError
1) ModuleNotFoundError
1) ImportError

This article will explain about ValueError, KeyError, IndexError, ZeroDivisionError Exception in python with respect to real world problems faced by Tanmay in the self ordering machine at the pizza shop

## How to Catch Exceptions?

- Exceptions can be caught and handled using Try and except statements in python.
- Statements which you feel can raise exceptions can be kept inside try block,and statements that can handle exception can be kept inside except block

Example: Let us try to access elements from a vegetables list , whose index is out of bounds and handle that corresponding exceptions

```py
vegetables=['carrot','brinjal','tomato','potato']
try:
    print('Second Element present in the vegetables list is',vegetables[1])
    print('Fifth Element present in the vegetables list is',vegetables[5])
except:
    print('Error occured')
o/p:
Second Element present in the vegetables list is brinjal
Error occured

```

From the above example, we can observe that statements that are bound to catch error are placed inside “try” statement.We can observe that the second print statement tries to access vegetable name which are present at 5th index position, but the vegetables list does not contain  anything after index 3, hence when we are trying to access element at 5th index position , it will throw an exception. This exception is caught by the “except” statement

## Catching Specific Exception

- A try statement can consist of more than 1 except clause to handle multiple exceptions in the same program.
- The general syntax for adding specific exceptions are as follows:

|try:<br>`	`statement(s)<br>except IndexError:<br>`                               `statement(s)<br><br>except KeyError:<br>`                             `statement(s)|
| :- |



```py
vegetables=['carrot','brinjal','tomato','potato']
vegetables_price={'carrot':20,'brinjal':10,'potato':15}
try:
    print('Second Element present in the vegetables list is',vegetables[1])
    print('Fifth Element present in the vegetables list is',vegetables[5])
    print(vegetables_price['mushroom'])
except IndexError:
    print('Index Error occured, you are trying to access element which is not present in the list')
except KeyError:
    print('KeyError occured,you are trying to access value of key which does not exists in the dictionary')
o/p:
Second Element present in the vegetables list is brinjal
Index Error occured, you are trying to access element which is not present in the list

```

The above code displays a try statement with multiple except clauses. First the index error would be raised and after that when you comment 2nd print statement from the try block, then KeyError Exception would be raised

```py
vegetables=['carrot','brinjal','tomato','potato']
vegetables_price={'carrot':20,'brinjal':10,'potato':15}
try:
    print('Second Element present in the vegetables list is',vegetables[1])
    #print('Fifth Element present in the vegetables list is',vegetables[5])
    print(vegetables_price['mushroom'])
except IndexError:
    print('Index Error occured, you are trying to access element which is not present in the list')
except KeyError:
    print('KeyError occured,you are trying to access value of key which does not exists in the dictionary')
o/p:
Second Element present in the vegetables list is brinjal
KeyError occured,you are trying to access value of key which does not exists in the dictionary
```

In the above figure, we have commented the 2nd print statement from the try clause, hence KeyError exception got executed
Image 6 describes that Now since Tanmay has learnt about Exception,he understood the basic terminologies of Exception. Now, since he was very hungry he decided to head to the “pizza hut” store, since that store is very close to his office, so he thinks that he can grab a pizza from there and eat it at his office while working(during short-breaks).When he went to the pizza hut store he observed that there was a long queue at the ordering counter 

## Scenario Image 7-12

|<p>7</p><p>![](images/Aspose.Words.334cd874-3028-4f44-b81c-fcad45c04dfa.001.jpeg)</p>|8![](images/Aspose.Words.334cd874-3028-4f44-b81c-fcad45c04dfa.002.jpeg)|9![](images/Aspose.Words.334cd874-3028-4f44-b81c-fcad45c04dfa.003.jpeg)|
| :- | :- | :- |
|<p>10</p><p>![](images/Aspose.Words.334cd874-3028-4f44-b81c-fcad45c04dfa.004.jpeg)</p>|<p>11</p><p>![](images/Aspose.Words.334cd874-3028-4f44-b81c-fcad45c04dfa.005.jpeg)</p>|<p>12</p><p>![](images/Aspose.Words.334cd874-3028-4f44-b81c-fcad45c04dfa.006.jpeg)</p>|

Image 7 describes that in order to avoid long queues,  tanmay decided to utilize the self ordering machines which are placed by the pizza hut on their Entrance.When he started ordering using the self ordering machine,initially he gets the following message as described stepwise  below:

Step 1: The machine displays different categories of pizza available at their store. It asks the user to Press-1 if they wish to order pizza from the available categories, otherwise it says press-0 to exit

Step 2: Since Tanmay wanted to order pizza from the categories which was displayed to him and as per the machine instructions he pressed -1 ,after which the machine asked tanmay to input which category of pizza he wanted to order?

Step 3:Since tanmay wanted to order “veg” pizza , he typed “veg” on the screen after which the machine displayed that “the category of pizza which was entered by tanmay was available” along with that it also displayed  list of veg pizza available at their store along with their cost and code number. Every pizza is assigned a unique code number and price. For eg: veg cheese burst pizza is assigned code “0” and its price is 100 Rs.The menu displayed below is the exact same menu which was displayed to tanmay on the self ordering machine
```py
0 veg_cheese_burst 100
1 corn_pizza 150
2 mix_veg 180
3 paneer_pizza 200
4 paneer_cheese 250
```


Step 4: After that the machine displayed a message to check the availability of the pizza, hence the machine asked tanmay to input the name of the pizza which he wished to order, hence he entered “vegan” to which the machine displayed an error such as “KeyError”  and tanmay was not able to understand the meaning of the same hence he decided to call the employee and take help from them. The below displayed error is the exact error which tanmay encountered on the self ordering machine.

Image 8 describes that As Tanmay was running short of time, he decided to take help from the store staff member to understand what was the issue with the machine.The staff arrived and she had a look at the display screen of the ordering machine and she informed tanmay about his mistake. His mistake was instead of entering the name of the pizza which was displayed in the menu he entered something which was not available in the menu(i.e vegan pizza) which was displayed to him.At that point Tanmay felt that , The machine should have displayed exactly what mistake he made in a human-friendly manner which could have saved his lot of time. The below given image  displays the exact error message which Tanmay was Expecting. 

```py
PLEASE CHECK THE AVAILABILITY OF PIZZA
Enter name of pizza which you want to order:vegan
KEY ERROR
PLEASE ENTER NAMES OF ONLY THOSE PIZZA WHICH ARE DISPALYED IN THE MENU
```

The error which tanmay had encountered in the above output  is known as KeyError Exception.Let us understand what is keyError exception with respect to scenario 8

## What is  keyError Exception?

A Python KeyError exception is raised , when you are trying to access a key that is not present in the dictionary.In the above scenario when the machine asked tanmay to enter the name of the pizza which he wanted to order? To this Tanmay entered "Vegan" pizza. Now in the dictionary there is no "vegan" pizza present, hence it raised a KeyError exception.

Image 9 describes that After Performing the above steps now,the machine asked Tanmay to enter how many pizzas he wished to order? To that Tanmay entered “two” instead of 2. Because of that something displayed on the screen termed as “ValueError” and some error messages were displayed which made tanmay more irritated because he was not able to understand what exactly those error messages meant?Hence he had to call the employee for help.

The error which was encountered by tanmay is displayed below:
```py
ValueError                                Traceback (most recent call last)
<ipython-input-2-f0c7c84de927> in <module>
    121 object1.getPizzaCategory()
    122 #object1.checkAvail()
--> 123 object1.orderPizza()
    124 #print(object1)
    125 object2=Pizza_Palace('Dominos','Delhi')

<ipython-input-2-f0c7c84de927> in orderPizza(self)
     72                 for index,(key,value) in enumerate(Pizza_Palace.veg_category.items()):
     73                     print(index,key,value)
---> 74                 number_of_pizza=int(input('How Many Pizza you want to order?'))
     75                 individual_amount=[]
     76                 for i in range(0,number_of_pizza):

ValueError: invalid literal for int() with base 10: 'two'
```

Image 10 describes that Tanmay again decided to take help from the store staff member to understand what was the issue with the machine.The staff arrived and she had a look at the display screen of the ordering machine and she informed tanmay about his mistake. His mistake was instead of entering 2 in numerical format he entered 2 in string format which caused a ValueError. At that point Tanmay felt that , The machine should have displayed exactly what mistake he made in a human-friendly manner which could have saved him a lot of time.

```py
How Many Pizza you want to order?:two
VALUE ERROR.........
PLEASE ENTER VALUE IN NUMERICAL FORMAT.
```

The above output message displays the exact same error message which tanmay was expecting self-ordering machine to display


The above error experienced by tanmay is known as ValueError Exception. Let us look at what is value error expectation with respect to the scenario explained above.

## What is a Value Error Exception?

ValueError in python occurs when users give an invalid value to a function but its argument is valid. For eg: when we ask python to compute the square root of a negative integer, although the negative integer is a number argument , the value is invalid. In the above example the machine has asked tanmay to enter how many pizzas he wishes to order? To this tanmay entered 2 in string format i.e "two" instead of entering it in numerical format. Hence the user tanmay had given an invalid value as an input, hence the value error occurred. The machine expected tanmay to enter a numerical value, but instead he entered a string value.

Image 11 describes that Once the ValueError issue was solved, Tanmay once again started the process of ordering the pizza in the self ordering machine and he repeated all the steps explained above.Now when the machine asked to input code number of the pizza which he wished to order, Tanmay mistakenly entered the wrong code number without even realising it . Now on the screen he was able to see something such as “IndexError” and Tanmay was not able to understand the error message and hence once again he had to call the employee to take help.

```py
Enter Code Number of the pizza which you want to order:5
INDEX ERROR....
You Have entered invalid code number for pizza
```

The above output message displays the exact same error message which tanmay was expecting self-ordering machine to display

The error which is encountered in the above image by tanmay is known as IndexError. Let us look at what are IndexError exceptions with respect to the scenario explained above.

## What are IndexError Exceptions?

IndexError Exception in python occurs when you are trying to access an index that dosent exists. In the above example each pizza is present at a certain index in a list, that index number acts as a code number for that particular pizza. In the above scenario tanmay entered an index number which is not at all present in the list and hence he got an IndexError Exception

Image 12 describes that After solving all the above errors by taking help from the employee, tanmay was finally able to order his pizza, pay the final bill displayed on the screen using his credit/debit card and finally a thank you message was displayed on the screen

```py
How Many Pizza you want to order?:2
Enter Code Number of the pizza which you want to order:1
The cost for this pizza is [150]
Enter Code Number of the pizza which you want to order:2
The cost for this pizza is [150, 180]
Total amount is 330
You Have Successfully ordered the pizza, Please collect your bill and show at the counter
Thank you for using this machine ,please give your ratings so that we can improve more on customer experience
```

The above output message displays the final message which Tanmay received after completion of his order







## What is  finally block?

The finally keyword is used with try except block. The finally block will always get executed irrespective if the try block raises an error or not The syntax for try except finally block is as follows:

|try:<br>`    `Statement{s)<br>except:<br>`       `Handling of Exception<br>finally:<br>`         `This block will always get executed|
| :- |
||
```py
vegetables=['carrot','brinjal','tomato','potato']
vegetables_price={'carrot':20,'brinjal':10,'potato':15}
try:
    print('Second Element present in the vegetables list is',vegetables[1])
    #print('Fifth Element present in the vegetables list is',vegetables[5])
    print(vegetables_price['mushroom'])
except IndexError:
    print('Index Error occured, you are trying to access element which is not present in the list')
except KeyError:
    print('KeyError occured,you are trying to access value of key which does not exists in the dictionary')
finally:
    print('Thank you for using this portal')
o/p:
Second Element present in the vegetables list is brinjal
KeyError occured,you are trying to access value of key which does not exists in the dictionary
Thank you for using this portal
```
In the above program we can see that KeyError Exception has occurred, but in spite of that the statement written in the finally block i.e "Thank for for using this portal" is displayed to the user after execution of the program,this is because that statement is written inside finally block
```py
How Many Pizza you want to order?:2
Enter Code Number of the pizza which you want to order:2
The cost for this pizza is [180]
Enter Code Number of the pizza which you want to order:3
The cost for this pizza is [180, 200]
Total amount is 380
You Have Successfully ordered the pizza, Please collect your bill and show at the counter
Thank you for using this machine ,please give your ratings so that we can improve more on customer experience
```

In the above output it is shown that when tanmay finished ordering pizza, a message is displayed such as "Thank you for using this machine ,please give your ratings so that we can improve more on customer experience", this particular message will always be shown to the user at the end, irrespective of whether he utilizes self ordering machine for ordering pizza or not, because that message is put up under finally block


