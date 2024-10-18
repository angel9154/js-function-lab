/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age){
  if  (age >= 21){
    console.log(`Adult`);
  } else {
    console.log(`Minor`);
  }
}


console.log('Exercise 2 Result:', isAdult(21));
console.log(isAdult(17));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(character){
  if (character === `a` || character === `e` || character === `i` || character === `o` || character === `u`){
    console.log(`true`)
  } else {
    console.log(false)
  }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Result:', isCharAVowel("e"));
console.log('Exercise 3 Result:', isCharAVowel("i"));
console.log('Exercise 3 Result:', isCharAVowel("o"));
console.log('Exercise 3 Result:', isCharAVowel("u"));
console.log('Exercise 3 Result:', isCharAVowel("d"));
console.log('Exercise 3 Result:', isCharAVowel("f"));
console.log('Exercise 3 Result:', isCharAVowel("g"));
console.log('Exercise 3 Result:', isCharAVowel("h"));
console.log('Exercise 3 Result:', isCharAVowel("r"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain){
  console.log(`${name}@` + `${domain}`)
}


console.log('Exercise 4 Result:', generateEmail("johh", "example.com"));
console.log('Exercise 4 Result:', generateEmail("smith", "gmail.com"));
console.log('Exercise 4 Result:', generateEmail("angelthegreat65", "outlook.com"));
console.log('Exercise 4 Result:', generateEmail("targetman45", "hotmail.com"));



/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(person, time){
  console.log(`Good ${time}, ${person}!`)
}


console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
console.log('Exercise 5 Result:', greetUser("John", "evening"));
console.log('Exercise 5 Result:', greetUser("Angel", "afternoon"));



/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(x, y, z){
  if(x > y && z){
    return x
  } if( y > x && z){
    return y
  } if(z > x && y){
    return z
  }
}


console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
console.log('Exercise 6 Result:', maxOfThree(7, 90, 178));
console.log('Exercise 6 Result:', maxOfThree(89, 98, 78));



/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(num1, num2){
  return num2 / 100 * num1 
}


console.log('Exercise 7 Result:', calculateTip(50, 20));
console.log('Exercise 7 Result:', calculateTip(67, 28));
console.log('Exercise 7 Result:', calculateTip(456456, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
function convertTemperature(num1, scale){
if(scale === "C"){
  return num1 * 1.8 + 32
} if(scale === "F"){
  return (num1 - 32) / 1.8
}
}


console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('Exercise 8 Result:', convertTemperature(32, "F"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
function basicCalculator(num1, num2, math){
  if(math === "subtract"){
    return num1 - num2
  } if ( math === "divide"){
    return num1 / num2
  } if (math === "multiply"){
    return num1 * num2
  } if(math === "add"){
    return num1 + num2
  }
}


console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));
