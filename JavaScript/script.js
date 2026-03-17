
// PART 1: BASIC EXERCISES


// 1. Hello, JavaScript
console.log("1. Hello, JavaScript");
console.log("Hello, World!");
console.log("Welcome to JavaScript Programming!\n");

// 2. Variable Practice
console.log("2. Variable Practice");
let name = "Juan";
let age = 20;
let favoriteLanguage = "JavaScript";

console.log("My name is " + name + ".");
console.log("I am " + age + " years old.");
console.log("My favorite programming language is " + favoriteLanguage + ".\n");

// 3. Simple Calculator
console.log("3. Simple Calculator");
let num1 = 10;
let num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2, "\n");



// PART 2: CONDITIONALS


// 4. Even or Odd Checker
console.log("4. Even or Odd Checker");
let number = 8;

if (number % 2 === 0) {
    console.log("The number is Even\n");
} else {
    console.log("The number is Odd\n");
}

// 5. Voting Eligibility
console.log("5. Voting Eligibility");
let voterAge = 18;

if (voterAge >= 18) {
    console.log("You are eligible to vote.\n");
} else {
    console.log("You are not eligible to vote.\n");
}

// 6. Grade Evaluator
console.log("6. Grade Evaluator");
let score = 85;

if (score >= 90) {
    console.log("Excellent\n");
} else if (score >= 80) {
    console.log("Very Good\n");
} else if (score >= 70) {
    console.log("Good\n");
} else if (score >= 60) {
    console.log("Fair\n");
} else {
    console.log("Failed\n");
}



// PART 3: LOOPS


// 7. Print Numbers 1–10
console.log("7. Print Numbers 1–10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log();

// 8. Multiplication Table
console.log("8. Multiplication Table of 5");
let tableNum = 5;

for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}
console.log();

// 9. Sum of Numbers 1–100
console.log("9. Sum of Numbers 1–100");
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("The sum is " + sum + "\n");



// PART 4: FUNCTIONS


// 10. Greeting Function
console.log("10. Greeting Function");
function greetUser(name) {
    console.log("Hello " + name + "! Welcome to JavaScript.");
}
greetUser("Maria");
console.log();

// 11. Area of Rectangle
console.log("11. Area of Rectangle");
function calculateArea(length, width) {
    return length * width;
}
console.log("Area:", calculateArea(10, 5), "\n");

// 12. Largest Number Function
console.log("12. Largest Number Function");
function findLargest(a, b, c) {
    let largest = a;

    if (b > largest) largest = b;
    if (c > largest) largest = c;

    return largest;
}
console.log("Largest number is", findLargest(5, 9, 3), "\n");



// PART 5: ARRAYS


// 13. Display Array Elements
console.log("13. Display Fruits");
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log();

// 14. Largest Number in Array
console.log("14. Largest Number in Array");
let numbers = [10, 45, 3, 67, 22];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number:", largest, "\n");

// 15. Reverse an Array
console.log("15. Reverse Array");
let arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log("Original:", arr);
console.log("Reversed:", reversed, "\n");

// 16. Palindrome Checker
console.log("16. Palindrome Checker");
function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
        return "Palindrome";
    } else {
        return "Not a Palindrome";
    }
}
console.log("racecar:", isPalindrome("racecar"));
console.log("hello:", isPalindrome("hello"), "\n");

// 17. Number Guessing Game
console.log("17. Number Guessing Game");
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 5; // Change 

console.log("Random number:", randomNumber);
console.log("Your guess:", guess);

if (guess === randomNumber) {
    console.log("Correct!");
} else {
    console.log("Try Again");
}