/* Functions in Javascript : 
       - to execute set of statements

       types of functions :
          - function declaration
          - function without parameters
          - function with parameter
          - function with return statement 
          - function with default values
          - named function
          - anonymous function
          - variable function
          - callback function
          - nested function
          - recursive function
          - IIFE (Immediately invoked function expression)
          - ES6 + Arrow function
*/
// function declaration :  and function without parameters :
function dummy() {
    console.log("Print me!");
}
dummy();

// function with parameter : & function with return statement : & function with default value : 
function calculate(Amount, discountGiven = 20) {
    return totalAmount = Amount - (Amount * discountGiven / 100);
}
calculate();
console.log(calculate(100, 20)); //output: 80...
console.log(calculate(140)); //output: 112...

// named function :
function named(param1, param2) {
    console.log("Named function");
}
named();

//anonymous function : The function without a name .
// document.getElementById("btn").addEventListener("click", function(){
//     console.log("Anonymous Function");
// });

// variable function : A function stored inside a variable called var_functions.
// It is also called as function expression.
var function1 = function () {
    console.log("Im variable function and also known as function expression!");
}
function1();

// callback function : After some execution , calling back a function.
// document.getElementById("btn").addEventListener('click',function() {
//     console.log("callback function!");
// });
// here while clicking on the click event , it is calling back the function.

// nested function :
// A function inside another function is called nested function.
function a() {
    function b() {
        console.log("Im function b");
    } b();
    console.log("im function a");
} a();

// recursive function :
// A function calls itself to solve a smaller instance of the same problem.
// అదే సమస్య యొక్క చిన్న ఉదాహరణను పరిష్కరించడానికి ఒక ఫంక్షన్ తనను తాను పిలుస్తుంది.
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// - IIFE (Immediately invoked function expression) : also known as self-invoking function :
(function () {
    console.log("Self invoking the function!");
})();
// }()); this will also works.

// - ES6 + Arrow function :
// let greet = () =>{
//     console.log("Greetings of the day!")
// }
// greet();

// function declaration : 
function func2() {
    console.log("This is function declaration!");
}
func2();

//Arrow function : 
let Arrow1 = () => {
    console.log("hello world, im arrow function!");
}
Arrow1();

// Anonymous function :
let Arrow2 = function () {
    console.log("Anonymous function!");
}
Arrow2();

// IIFE :
(function arrow3() {
    console.log("IIFE function!");
})();

//callback function :
// document.getElementById("btn").addEventListener('click',function() {
//     console.log("Callback function!");
// });

// --------Here are 10 questions to practice JavaScript function coding:--------
// ### Beginner-Level Questions:
// Write a function named greet that takes a name as an argument and returns a greeting message like "Hello, [name]!".
function greet(name) {
    return `Hello ${name}!`;
}
console.log(greet("AKS"));

// 2. Create a function `sum` that accepts two numbers and returns their sum. Add error handling to ensure the inputs are numbers.
function sum(param1, param2) {
    if (typeof param1 !== 'number' || typeof param2 !== 'number') {
        return "Error : both inputs must be numbers";
    }
    else {
        return param1 + param2;
    }
}
console.log(sum(3, 4));  //7
console.log(sum(5, "shiny")); //Error : both inputs must be numbers
console.log(sum(3, "3")); //Error : both inputs must be numbers

// 3. Write a function `isEven` that checks if a given number is even and returns `true` or `false`.
function isEven(number) {
    if (number % 2 === 0) {
        return `The ${number} is even number! so true`;
    }
    else {
        return `The ${number} is odd number! so false`;
    }
}
console.log(isEven(3));

// 4. Implement a function `reverseString` that takes a string as input and returns the reversed string.
let message = "Hey macha! how are u?"
function reverseString(str) {
    return str.split('').reverse().join('');
}
message = reverseString(message);
console.log(message);

// 5. Create a function `findMax` that accepts an array of numbers and returns the largest number in the array.
let findMax = {
    Fname: "AK",
    Lname: "Shaik",
    Address: "Chittoor"
};
console.log(findMax);

// 6. Write a function `factorial` that calculates the factorial of a number using recursion.
function factorialNum(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));


/*

### Intermediate-Level Questions:

7. Create a function `fizzBuzz` that takes a number as input and prints:
   - "Fizz" if the number is divisible by 3,
   - "Buzz" if divisible by 5,
   - "FizzBuzz" if divisible by both,
   - The number otherwise.
8. Implement a function `capitalizeWords` that takes a string and capitalizes the first letter of each word.
9. Write a function `mergeArrays` that takes two arrays and returns a single array with all unique elements, sorted in ascending order.
10. Create a function `palindromeCheck` that checks if a given string is a palindrome (ignoring spaces, punctuation, and capitalization). */


// -> Write a JavaScript Program to print the pattern * * * * * * * * * * 
function printPattern() {
    let pattern = "";
    for (i = 0; i <= 10; i++) {
        pattern += "* ";
    }
    console.log(pattern.trim());
}
printPattern();

/*2) What is the output of following code Const arr = [12,45,67,89]; arr[100] = [99]; 
console.log(arr.length); */
const arr = [12, 45, 67, 89];
arr[100] = [99];
console.log(arr.length);  //101


//different types of datatypes in an array in ascending order.
const sortMixedArray = (arr) => {
    return arr.sort((a, b) => a - b);
};

const array1 = [1, 2, 3, "35", null, true, "33", 100];
const sortedArray = sortMixedArray(array1);
console.log(sortedArray);


/*. Find the Longest String : 
Create an object method findLongestString() that iterates through the values of an object and returns the longest string. */

const obj = {
    key1: 'myname',
    key2: 'me',
    key3: 'elephantIsBig',

    findLongestString() {
        let longest = '';
        for (let key in obj) {
            if (typeof this[key] === 'string' && obj[key].length > longest.length) {
                longest = this[key];
            }
        }
        return longest;
    }
};
console.log(obj.findLongestString());


//Find the Strong number : 

let factNum = (num) => {
    let res = 1;
    for (let i = 2; i <= num; i++) {
        res *= i;
    }
    return res;
};
let result = (n) => {
    let sum = 0;
    for (let digit of String(n)
        .split('').map(Number)) {
        sum += factNum(digit);
    }
    return sum === n ? 'yes' : 'no'
};

console.log(result(6));
console.log(result(4));


// let fact = (num) => {
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// };
// let res = (n) => {
//     let sum = 0;
//     for (let digit of String(n)
//         .split('').map(Number)) {
//         sum += fact(digit);
//     }
//     return sum === n ? 'Yes' : 'No';
// };
// console.log(res(145));
// console.log(res(534));


function patternDesign() {
    let pattern = '';
    for(let i =0; i<10; i++){
        pattern += '* ';
    }
    console.log(pattern.trim());
}
patternDesign();



