/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/
function numberType(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(numberType(12));

/******************************************************************************
2.

Make the following function:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/

function myWord(myString) {
  return myString.toUpperCase() + "!";
}

console.log(myWord("This is cool"));
/******************************************************************************
3.

Make the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" )if the hour received is 18-23
"Invalid time" if the hour received is greater than 23

If no hour is received, your function should return an error message.

******************************************************************************/
function myGreetings(name, time) {
  if (time < 0 || time > 23) {
    return `"Invalid time ${name}"`;
  } else if (time >= 0 && time <= 5) {
    return `"Good night ${name}"`;
  } else if (time >= 6 && time <= 11) {
    return `"Good morning ${name}"`;
  } else if (time >= 12 && time <= 17) {
    return `"Good day ${name}"`;
  } else if (time >= 18 && time <= 23) {
    return `"Good evening ${name}"`;
  } else {
    return "there is no hours it's an error time";
  }
}
console.log(myGreetings("Jhon", 8));
/******************************************************************************
4.

Make the following function:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
*************************************************************************/
function myHobbies(Array) {
  return Array.slice(1, -1);
}

const hobbies = [
  "Chess   ",
  "Yoga",
  "Hiking",
  "boardgames",
  "badminton",
  "Watching tv",
];
console.log(myHobbies(hobbies));

/******************************************************************************


Make the following function:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/
function modifyData(string) {
  const trimedString = string.trim();
  const modifiedString = trimedString.replace("hard", "fun");
  return modifiedString;
}

console.log(modifyData("  It's hard to use methods   "));
console.log(modifyData("  JavaScript is hard  "));
/******************************************************************************
6.

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

******************************************************************************/

const heroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
  "Black Widow",
];
heroes.shift();

console.log(heroes.join("💪"));

heroes.splice(0, 2, "Captain America");
console.log(heroes);
heroes.splice(1, 1, "SkrullS");
console.log(heroes);
//

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/
function myUserData(input) {
  if (typeof input === "string") {
    return "😎" + input + "😎";
  } else if (typeof input === "boolean") {
    if (input === true) {
      return "😎Yeah😎";
    } else input === false;
    {
      return "😎Chill😎";
    }
  } else if (typeof input === "number") {
    input = input * 2;
    //convert to String
    input = input.toString();

    return "😎" + input + "😎";
  } else return "Primitive values only";
}
//myUserData(true);
console.log(myUserData("Hello"));

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/
function myParameters(arr, value) {
  const index = arr.indexOf(value);
  if (index === -1) {
    arr.push(value);
  } else {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(myParameters(["Red", "Yellow", "Green", "Blue"], "Yellow"));
