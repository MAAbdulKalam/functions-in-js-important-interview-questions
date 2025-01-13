/* Assignment
1. Write a function using an arrow function syntax that filters out even numbers from an
array and returns the odd numbers.*/
const numb1 = [10, 11, 12, 13, 14, 15, 16];

const filterEven = (num) => {
    return numb1.filter((num) => num % 2 !== 0);
}
console.log(filterEven(numb1));   // output : [ 11, 13, 15 ]

/*2. Arrow functions don’t have their own this. Illustrate this with an example showing
the difference between a regular function and an arrow function inside an object
method. */
// function greet() {
//     console.log('greetings of the day!');
// }
// greet();

// const newGreet = () => {
//     console.log('hello');
// }
// newGreet();

const obj = {
    name: 'ak',
    regularfunction: function () {
        console.log("Regular function!");
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log("Arrow function!");
        console.log(this.arrowFunction)
    },
};
obj.regularfunction();
obj.arrowFunction();

/*3. Convert the following function declaration to an arrow function:
function greet(name) {
 return `Hello, ${name}!`; 
} */
const greet = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet("Ak"));

/* 4. What happens if you call a constructor function without the new keyword? Write a
code example to demonstrate this behavior. */
function person(name, age, eyecolor, loc) {
    this.name = "AK07",
    this.age = 23,
    this.eyecolor = "black",
    this.loc = "Nagari"
}
const myMother = new person("Isha", 48, "black", "natham kandriga");
const myFather = new person("Ahmed", 50, "black", "Kanchipuram");

person.nationality = "indian";
console.log(person.nationality);

person.prototype.nationality = "Indian";
console.log(myMother.nationality);

/*5. Create a constructor function Car that takes brand and year as arguments. Use the
new keyword to create two instances and log their properties. */
function Car(brand, year){
    this.brand = brand,
    this.year = year
}
const myCar1 = new Car("audi", 2020);
const myCar2 = new Car("volvo", 2010);

Car.prototype.speed = "331kmph";

console.log(myCar1.brand);  // audi
console.log(myCar1.year);   // 2020
console.log(myCar1.speed);  // 331kmph

console.log(myCar2.brand);  //volvo
console.log(myCar2.year);   //2010
console.log(myCar2.speed);  //331kmph

/*6. Explain how the value of this changes depending on how a function is called. Write
examples to illustrate:
In a regular function
Inside an object method
With the new keyword
Inside an arrow function */
'use strict';
function regularfunction() {   //in a regular function
    console.log(this);
}
regularfunction();  

const objMethod = {              // Inside an object method
    name : "ak",
    display : function () {        
        console.log(this.name);  // here this refers to the objMethod
    },
};
objMethod.display();  //ak

function person1 (name) {         // With the new keyword
    this.name = name
};
const newName = new person1('pandu');
console.log(newName.name);   //pandu

const person3 = {                // Inside an arrow function
    name : 'arrow Function',
    display : function () {
        const arrowFunction = () => {
            console.log(this.name);
        };
        arrowFunction();
    },
};
person3.display();

/*7. Explain why arrow functions cannot be used as constructors. Write a code example
that demonstrates the error when trying to use an arrow function as a constructor. */

// Arrow functions do not have their own this. so arrow functions do not have their own constructor.
const arrowCheck = () => {
    this.name = 'Arrowcheck using constructor';
};
try {
    const arrowCheck2 = new arrowCheck(); //Throws a typeError.
} catch (error) {
    console.log(error.message);   //arrowCheck is not a constructor.
}

/*8. Use the new keyword to create an object from a constructor function and add a
new property to the instance dynamically after its creation. Demonstrate that the
new property does not affect other instances. */
function CreateObj(name) {
    this.name = name
}
const obj1 = new CreateObj('abdul');
console.log(obj1.name);

// now we are dynamically adding a new object to the newCreatedObj : 
obj1.age = 23;
console.log(obj1.age);

const Obj2 = new CreateObj('Ahmed');
Obj2.age = 50;
console.log(Obj2.name);       //Ahmed
console.log(Obj2.age);        // 50  
console.log(Obj2.address);   //undefined (doesnot affect the obj2).

/*9. Write a function delayedPrint that demonstrates how to preserve the value of this
inside a setTimeout callback with arrow function approach. */
function delayedPrint() {
    this.message = "Hello , This is preserved!";

    setTimeout(() => {
        console.log(this.message);
    },3000);  //3-seconds delay.
}
const printer = new delayedPrint();   //Hello , This is preserved!

/*10. Create an arrow function doubleAndFilter that doubles each number in an array
and then filters out the numbers greater than 10  */
const doubleAndFilter = () => {
    const numbers = [1,2,3,4,5,6,7,8,9];
    const double = numbers.map((num) => num * 2);
    const GreaterThan10 = double.filter((value)=> value >10);
    return GreaterThan10;
}
console.log(doubleAndFilter());   // [ 12, 14, 16, 18 ]
