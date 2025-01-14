/*Assignment
1. Write a program that uses var, let, and const to show how variable declarations are
hoisted differently. Include examples of how accessing them before initialization
behaves. */

var a = 10;
function check1() {
    console.log(a);   // var is a global scope. so it will give output as 10.
}
check1();

function check2() {
    var b = 5;
    console.log(b);   // here b works . 
}
check2();

function check3() {
    console.log(c);   // here c is undefined because the variable declaration will be hoisted but not the value.. 
    var c = 5;
}
check3();

function check4() {
    console.log(d);     // d is undefined here. 
}
check4();
var d = 100;        // here d is hoisted means it will go to the top because the variable declared in var. but value initialized will not be hoisted.

let e = 7;
function checkLet1() {
    console.log(e);
}
checkLet1();        // here let will work as expected. output will be 7.

// function checkLet2() {
//     console.log(f);
//     let f = 3;      //in this case, we will get ReferenceError: Cannot access 'e' before initialization. because let is a block scope .
// }
// checkLet2();     

// function checkLet3() {
//     let g = 3;     
// }
// console.log(g);     //in this case, we will get ReferenceError: f is not defined.
// checkLet3(); 


// function checkConst1() {
//     console.log(i);    //ReferenceError: i is not defined. because it is also block scope Only the declaration reference space is created, not initialized..
//     const pi = 3.14; 
// }
// checkConst1();       // it is also as same as let variable only.

/*2. Create a function that declares variables using var, let, and const within an if block.
Illustrate how var leaks out of the block while let and const don’t. */

function checkingVariables() {
    if (true) {
        var x = 10;     //var is a function scope or a global scope if not in a function.
        let y = 20;     //let is a block scope.
        const z = 30;   //const is a block scope.
        console.log(`inside block : x = ${x} , y = ${y} , z = ${z}`);
    }

    console.log(`Outside block : x = ${x}`);   // Works because var is function-scoped
    // console.log(`Outside block: y = ${y}`); // Uncaught ReferenceError: y is not defined
    // console.log(`Outside block: z = ${z}`); // Uncaught ReferenceError: z is not defined
}
checkingVariables();

/*3. Write a function createCounter that uses closure to maintain a private count variable.
The function should return methods to increment, decrement, and get the count. */
function createCounter() {
    let count = 0;  //private count 
    return {
        increment: () => {
            count++;
            console.log(`incremented: ${count}`);
        },
        decrement: () => {
            count--;
            console.log(`decremented: ${count}`);
        },
        getCount: () => {
            console.log(`current count: ${count}`);
            return count;
        }
    };
}

const counter = createCounter();

counter.increment(); // Incremented: 1
counter.increment(); // Incremented: 2
counter.getCount();  // Current Count: 2
counter.decrement(); // Decremented: 1
counter.getCount();  // Current Count: 1

/*4. Create a nested function where the inner function accesses variables from its outer
function. Use this to demonstrate lexical scoping rules in JavaScript. */
function outer() {
    var myVar = "Hello";
    function inner() {
        console.log(myVar);  // Accessing myVar from outer's scope
    }
    inner();
}
outer();

/*5. Write a script that declares a variable in the global scope and another in the module
scope. Show how the variables behave differently when the code is run in a browser and
a Node.js environment. */

var globalScope = "Hello..,I'm a global scope!";

let moduleScope = "Hello..,I'm a module scope!";

function checkspace() {
    console.log("Accessing Global scope : ", globalScope);
    console.log("Accessing module scope : ", typeof moduleScope === 'undefined' ? 'Not accessible' : moduleScope);
}
checkspace();
/*In the browser, var leaks to the window object and behaves globally, while let is block-scoped to the script.
  In Node.js, neither var nor let attaches to a global object; both are module-scoped but with different behaviors. */

/*6. Use an IIFE to create a private scope. Inside the IIFE, define a variable and a function,
then expose only the function to the outside world. */
const greet = (function outsideFunction() {
    let wishes = 'hello greetings of the day!';
    function insideFunction() {
        return wishes;  // Returns the private `wishes`
    }
    return insideFunction();
})();

console.log(greet);   // Works and prints: "Hello, greetings of the day!"

/*7. Create a BankAccount constructor function that simulates private variables (e.g.,
balance) using closures. Provide methods like deposit, withdraw, and getBalance. */
function BankAccount() {
    let balance = 1000;
    return {
        deposit: (amount) => {
            balance += amount;
            console.log(`Balance after deposit is ${balance}`);
        },
        withdraw: (amount) => {
            if (balance >= amount) {
                balance -= amount;
                console.log(`Balance after withdraw is ${balance}`);
            } else {
                console.log('insuffiecient balance!');
            }
        },
        getBalance: () => {
            console.log(`Finally the Balance amount is ${balance}`);
            return balance;
        }
    };
};
const BankDetails = BankAccount();

BankDetails.deposit(1000); //Balance after deposit is 2000
BankDetails.withdraw(500); //Balance after withdraw is 1500
BankDetails.withdraw(4000); //insuffiecient balance!
BankDetails.deposit(3500); //Balance after deposit is 5000
BankDetails.getBalance(); //Finally the Balance amount is 5000.......

/*8. Define a function that demonstrates how function declarations are hoisted while
function expressions are not. Include examples of calling both types of functions before
and after their definitions. */ 

declaration();     //the function declaration is hoisted.
function declaration() {
    console.log('Hey, hi..what a sudden surprise!');
}

// expression();        //// TypeError: expression is not a function
// var expression = function () {
//     console.log('Ok take care bye!');  //the function is not hoisted and will result in an error
// }

/*9. Write a program to illustrate how "this" behaves differently in regular functions and arrow
functions, especially in the context of objects and event listeners. */
let name = 'isha';
function regular() {
    this.name = 'ak';
    console.log(this.name);  // This will log 'ak' because 'this' points to the global object
}
regular();
console.log(name);  // Output: 'isha' because the regular function does not modify the variable `name` itself

let name2 = 'ashik';
const arrowFunction = () => {
    this.name2 = 'ahmed';
    console.log(this.name2);
}
console.log(arrowFunction());
console.log(name2);

