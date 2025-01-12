/*Assignment
1. Write a regular function called sumArray that takes an array of numbers and an optional
multiplier (default is 1). The function should return the sum of all numbers in the array
multiplied by the multiplier. */
function sumArray(numbers, multiplier = 1) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("First argument must be array of numbers!");
    }

    if (!numbers.every(num => typeof num === 'number')) {
        throw new TypeError("Array must contain only numbers!");
    }

    if (typeof multiplier !== 'number') {
        throw new TypeError("multiplier must be a number!");
    }
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum * multiplier;
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([1, 2, 3, 4], 2)); // Output: 20
console.log(sumArray([5, 10, 15], 0.5)); // Output: 15

/*2. Create a function expression called filterAndDouble that accepts an array of numbers and a
threshold number. It filters the numbers greater than the threshold and then doubles each of
those numbers. */
function filterAndDouble(numbers, threshold) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("First argument must be array of numbers!");
    }
    if (!numbers.every(num => typeof num === 'number')) {
        throw new TypeError("Array must contains numbers");
    }
    if (typeof threshold !== 'number') {
        throw new TypeError('threshold must be a number');
    }
    return numbers
        .filter(num => num > threshold)
        .map(num => num * 2);
};

const numbers = [5, 10, 15, 20, 25];
const threshold = 12;

const result = filterAndDouble(numbers, threshold);
console.log(result); // Output: [30, 40, 50]

/*3. Write an IIFE that takes an object and adds a new key-value pair to it (status: "active").
Return the updated object. */
const updatedObject = (function (obj) {
    obj.status = "active";
    return obj;
})({});
console.log(updatedObject);

/*4. Write a function checkObjectKeys that takes an object and checks if it has both name and
age keys. Return "Valid" if both keys  are present, otherwise return "Invalid". */
function checkObjectKeys(obj) {
    if (typeof obj === 'object' && obj !== null) {
        if (obj.hasOwnProperty('name') && obj.hasOwnProperty('age') && obj.hasOwnProperty('occupation')) {
            return 'valid';
        }
    }
    return 'invalid';
}
const person1 = {
    name: "ak",
    age: 23,
    occupation: "FED"
};
console.log(checkObjectKeys(person1));

/*5. Write an IIFE that takes an array of numbers and logs the sum of the numbers. */
let sumOfNumbers = (function iifeNum(numb) {
    const numb1 = numb.reduce((acc, currentValue) => (acc + currentValue));
    return numb1;
}([1, 2, 3, 4, 5]));
console.log(sumOfNumbers);

/*6. Write a function expression called printObjectKeys that takes an object and logs all its keys
and values using a for...in loop. */
function printObjectKeys(obj) {
    for (let key in obj) {
        console.log(`keys:${key} and values:${obj[key]}`)
    }
}
printObjectKeys({ val: 1, val2: 2, val3: 3 });

/*7. Create a function called greetUser with a name parameter (default value is "Guest") and a
status parameter. If the status is "admin", return "Welcome Admin <name>", otherwise
return "Hello <name>". */
function greetUser(name, status) {
    if (status === "admin") {
        return `Welcome Admin ${name}`;
    } else {
        return `Hello ${name}`;
    }
}
console.log(greetUser('Guest', 'admin'));

/*8. Write a function expression called findEvenNumbers that accepts an array of numbers and
returns a new array containing only the even numbers. */
const findEvenNumbers = function findEvenNumbers(num) {
    const evenNumbers = [];
    for (let i = 0; i < numbers5.length; i++) {
        if (num[i] % 2 === 0) {
            evenNumbers.push(num[i]);
        }
    }
    return evenNumbers;
}

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = findEvenNumbers(numbers5);
console.log(even);

/*9. Write a regular function mergeObjects that takes two objects as parameters and returns a
new object that combines both. */
function mergeObjects(obj1, obj2) {
    const combineArr = obj1.concat(obj2);
    return combineArr;
}

const fruits = [
    { no: 1, name: 'mango' },
    { no: 2, name: 'grapes' },
    { no: 3, name: 'orange' },
    { no: 4, name: 'banana' }
]
const vegetables = [
    { no: 1, name: 'potato' },
    { no: 2, name: 'carrot' },
    { no: 3, name: 'beans' },
    { no: 4, name: 'ladiesFinger' }
]
const NewMergedArray = mergeObjects(fruits, vegetables);
console.log(NewMergedArray);

/*10. Write an IIFE that takes an array of numbers and returns the array sorted in ascending order.  */

// const numbers6 = [12, 22, 3, 34, 15];
// const SortedArr = numbers6.sort((a, b) => a - b);
// console.log(SortedArr);

const numbers6 = [12, 22, 3, 34, 15];
const MergedArray = (function (num) {
    return num.sort((a, b) => a - b);

})(numbers6);
console.log(MergedArray);


// const mixedDataType = [12, "22", 3, true, 15];
// function checkArr(arr) {
//     const dataTypeOf = arr.toString()
//     .split('').reverse().join('');
//     return parseInt(dataTypeOf);
// }
// console.log(dataTypeOf);
// const output = dataTypeOf(mixedDataType);
// console.log(output);

// function reverseNumber(num) {
//     const reversed = num.toString()
//     .split('').reverse().join('');
//     return parseInt(reversed);
// }
// const input = 1234;
// const output = reverseNumber(input);
// console.log(output);