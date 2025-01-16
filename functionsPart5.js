/*Assignment : part-1 :
1. Factorial Calculation
Write a recursive function factorial(n) to calculate the factorial of a given number n.
Ensure the function handles edge cases like n = 0 or negative numbers. */
function factorial(n) {
    if (n < 0) {
        return 'Factorial is not defined for negative numbers!';
    }
    else if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));   //120
console.log(factorial(-5));  //Factorial is not defined for negative numbers!
console.log(factorial(0));   //1

/*2. Sum of Array Elements
Create a recursive function sumArray(arr) that calculates the sum of all elements in an
array. */

function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
}
let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

/*3. Find Maximum in an Array
Write a recursive function findMax(arr) to find the maximum element in an array. */
function findMax(arr) {
    const maxNum = Math.max(...numb);  //Math.max ( returns the largest number among its arguments. )
    return maxNum;
}
let numb = [10, 20, 33, 74, 5, 1000, 570];
console.log(findMax(numb));   //1000

/*4. Print Numbers
Create a function printNumbers(n) that prints numbers from n down to 1 using recursion. */
function printNumbers(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(printNumbers(3));   //true.

/*5. Fibonacci Sequence
Write a recursive function fibonacci(n) to find the nth number in the Fibonacci sequence. */
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};
console.log(fibonacci(10));  //55.

/*6. Reverse a String
Write a recursive function reverseString(str) to reverse a given string. */
function reverseString(str) {
    if (str === '') {
        return 'empty string';
    }
    const reversedStr = str.split('').reverse().join('');
    return reversedStr;
}
// const str = "Hello";
console.log(reverseString('Hello..!'));

/*7. Check Palindrome
Create a recursive function isPalindrome(str) to check if a given string is a
palindrome.*/
function isPalindrome(str) {
    if (str === '') {
        return 'empty string';
    }
    const Checkpalindrome = str.split('').reverse().join('');

    if (str === Checkpalindrome) {
        return `True, ${str} is a palindrome!`;
    } else {
        return `false, ${str} is not a palindrome!`;
    }
}
console.log(isPalindrome('MOM'));

/*8. Calculate Power
Write a recursive function power(base, exponent) that calculates the power of a
number without using the Math.pow() function.*/
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(4, 4));  //256     // console.log(16*16);
console.log(power(2, 2));  //4.

/*9. Nested Object Search
Write a recursive function findKey(obj, key) that searches for a specific key in a
deeply nested object and returns its value. */
function findKey(obj, key) {
    for (let currentkey in obj) {
        if (currentkey === key) {
            return obj[currentkey];
        }
        if (typeof obj[currentkey] === 'object' && obj[currentkey] !== null) {
            let result = findKey(obj[currentkey], key);

            if (result !== undefined) {
                return result;
            }
        }
    }
    return undefined;
}

const obj = {
    name: 'ak',
    age: 23,
    address: {
        city: 'chittoor',
        town: 'nagari',
        pin: 517590
    }
};

console.log(findKey(obj, 'town'));  // Output: nagari
console.log(findKey(obj, 'pin'));   // Output: 517590
console.log(findKey(obj, 'name'));  // Output: ak
console.log(findKey(obj, 'country')); // Output: undefined

/*10. Generate Subsets
Write a recursive function generateSubsets(arr) to generate all subsets of a given array.  */
function generateSubsets(arr) {
    if (arr.length === 0) {
        return [[]];   //empty array.
    }
    // Recursive case : 
    const firstElement = arr[0];
    const subsetsWithoutFirst = generateSubsets(arr.slice(1));

    const subsetsWithFirst = subsetsWithoutFirst.map((subset) => [firstElement, ...subset]);

    return [...subsetsWithoutFirst, ...subsetsWithFirst];

}

// const arr = [1,2,3];
// console.log(generateSubsets(arr));
console.log(generateSubsets([1, 2, 3]));   //directly giving the values to the arr .

//part - 2: 
/*1. Given the following object:
const person = { name: "Alice", age: 25, city: "New York" };
Write a function that accepts this object and logs the name and city. */
const person = { name: "Alice", age: 25, city: "New York" };
function personDetails(person) {
    console.log(person.name);
    console.log(person.city);
}
personDetails(person);

/*2. Given the array:
const colors = ["red", "blue"];
Use destructuring to extract the first two elements and set a default value of "green" for
the third element. */
const colors = ["red", "blue"];
const [color1, color2, color3 = "green"] = colors;
console.log(color1);
console.log(color2);
console.log(color3);

/*3. Given the object:
const user = { id: 1, profile: { firstName: "John", lastName: "Doe" }};
Destructure to extract firstName and lastName and log them. */
const user = { id: 1, profile: { firstName: "John", lastName: "Doe" }};
let {profile: {firstName,lastName}} = user;
console.log(firstName + ' ' + lastName);

/*4. Create a function that accepts an object:
const product = { id: 101, name: "Laptop", price: 799 };
Use destructuring in the function parameter to extract name and price and return a
formatted string like "Laptop costs $799". */
const product = { id: 101, name: "Laptop", price: 799 };
function destructuring({name, price}) {
    return `"${name} costs $${price}".`;
};
console.log(destructuring(product));

/*5. Write a function sum that accepts any number of arguments using the Rest operator and
returns their sum.  => sum(1, 2, 3, 4); // Output: 10 */
function totalNum(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(totalNum(1, 2, 3, 4));

/*6. Given the object:
const employee = { id: 1, name: "Jane", department: "HR", location: "LA" };
Use destructuring with Rest to extract id and name, and store the remaining properties
in another object. */
const employee = { id: 1, name: "Jane", department: "HR", location: "LA" };
const {id, name, ...rest} = employee;
console.log('The employee id is '+ id +' and the name is '+ name);
console.log(name +' is working in the '+ rest.department +' department with the id number '+ id +' and the location is '+ rest.location);

/*7. Given the array:
const fruits = ["apple", "banana", "orange", "mango"];
Use destructuring to extract the first two fruits into variables and the rest into another
array. */
const fruits = ["apple", "banana", "orange", "mango"];
const [firstFruit, secondFruit,...restFruits] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(restFruits);

/*8. Given two arrays:
const Arr1 = [1, 2, 3]; const Arr2 = [4, 5, 6];
Use the Spread operator to merge them into a single array. */
const Arr1 = [1, 2, 3];
const Arr2 = [4, 5, 6];
const mergeArr = [...Arr1,...Arr2];
console.log(mergeArr);

/*9. Clone the following object using the Spread operator:
const settings = { theme: "dark", notifications: true, language: "en"}; */
const settings = { theme: "dark", notifications: true, language: "en"};
const newSettings = {...settings};  // Cloning the object using the spread operator.
console.log(newSettings);

/*10. Use the Spread operator to create a new object based on:
const user2 = { id: 1, name: "Mike", age: 30 };
Add a new property isAdmin: true without modifying the original object.  */
const user2 = { id: 1, name: "Mike", age: 30 };
const addNew = {...user2, ...{isAdmin : true}};
console.log(addNew);
console.log(user2);

