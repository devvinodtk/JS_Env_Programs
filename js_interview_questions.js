// for(var i =0; i<3; i++) { 
//     setTimeout(()=> console.log(i), 0);
// }

// o/p: 3 printed 3 times. var has global scope and by the time settimeout executes, i value is set to 3.
/** ================ */

// for(let i =0; i<3; i++) {
//     setTimeout(()=> console.log(i), 0);
// }

// o/p: 0, 1, 2. let has block scope. setTimeout will be executed with values of i as 0 , 1 , 2.
/** ================ */

// for(var i =1; i<=3; i++) {
//     (function(i){
//         setTimeout(()=>console.log(i),0);
//     })(i)
// }

// o/p: 0, 1, 2. let has block scope. Closure if formed around setTimeout with value of i as 0, 1, 2.
/** ================ */

// console.log(+true); // 1
// console.log(typeof +true); //number

//due to coercion in js, when + is put infront of true, it will be converted to numeric equivalent 1. 
/** ================ */

// console.log(!"anil"); // false
// console.log(typeof ("anil")); //string

//due to coercion in js, when ! is put infront of non-empty string value, it will be converted to boolean equivalent false. 
/** ================ */

// let data = "size"
// const bird = {
//     size: "small"
// }

// console.log(bird[data]) // "small"
// console.log(bird["size"]) // "small"
// console.log(bird.size) // "small"
// console.log(bird.data) // undefined

/** ================ */

// let c = { name : "Peter"};
// let d;

// d = c;
// c.name = 'John'
// console.log(d.name); // John

// c is an obj. c and d are pointing to same object reference. d.name & c.name will be 'John'
/** ================ */

// var x;
// var x = 10;
// console.log(x); // 10. 

// var shadowing. If we have `let x = 10;` then o/p will be an error.   

/** ================ */

// let a = 3;

// let b = new Number(3);

// console.log(a == b); // true
// console.log(a === b); // false

// typeof b  is Object. type number is not equal to type object.
/** ================ */

// function sum (a, b) {
//     return a + b;
// }

// console.log(sum(2, "5")); // 25.

//due to coercion in js, when + operator present, then 2 is also converted to string.

/** ================ */

// let number = 0;
// console.log(number++); // 0
// console.log(++number); // 1 + 1 = 2
// console.log(number); // 2

// pre and post increment. In the first console log value is printed and then increment the value. 
// In the second console log value is incremented and then prints it

/** ================ */

// function getArgs(...args) {
//     console.log(typeof args) // object
// }

// getArgs(21)

// In JS typeof [21] is object.
/** ================ */


// function getAge() {
//     'use strict'
//     age = 21;
//     console.log('age is ==> ', age);
// }

// getAge(); //ReferenceError: age is not defined

/** ================ */

// const sum = eval('10*10+5');
// console.log(sum); //105

// when math operator is encountered inside eval, mathematical opertation is performed, according to precedence.
/** ================ */

// sessionStorage.setItem('cool_secret', 123);

//How long is cool_secret accessible ? Ans. Till the last tab in the browser is closed or browser is closed.

/** ================ */

// const obj = { 1: 'a', 2: 'b', 3: 'c'}

// console.log(obj.hasOwnProperty("1")); // true
// console.log(obj.hasOwnProperty(1)); // true

// When the keys are numerical values for an object, we can refer them as "1" or 1.
/** ================ */

// const obj = { a: 'one', b: 'two', a: 'repeat'};
// console.log(obj); // { a: 'repeat', b: 'two'}

/** ================ */

// for(let i=1; i< 5; i++) {
//     if(i===3) continue
//     console.log(i);
// }
// o/p: 1,2,4
/** ================ */

// const foo = () => console.log('First');
// const bar = () => setTimeout(()=> console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();

// o/p: First, Third, Second

/** ================ */

/*
 <div>
    <div onclick="console.log('first div')">
        <div onclick="console.log('second div')">
            <button onclick="console.log('button')">
                Click !
            </button
        </div>
    </div>
 </div> 

 Q. What happens when you click the button ?
 Ans. o/p: button, second div, first div

Event bubbling happens from inside to outside. 

Event Propagation: Event propagation refers to how events flow through the DOM. It occurs in two main phases:

1. Capturing Phase (Event Capturing): The event starts from the root of the DOM and travels downwards toward the target element. 

2. Bubbling Phase (Event Bubbling): Once the event reaches the target element, it starts bubbling back up the DOM, 
from the target to the root, allowing any ancestor elements to handle the event if they have appropriate event listeners.

Event Bubbling: Definition: Event bubbling occurs when an event triggered on a child element is also fired on its parent elements, 
propagating upwards in the DOM hierarchy.
 */

/** ================ */

// const person = { name : 'John'}

// function sayHello (age) {
//     return `Hello ${this.name} and age is ${age}` 
// }

// console.log(sayHello.call(person, 21)); // Hello John and age is 21
// console.log(sayHello.bind(person, 21)); // returns function bound with obj person. we would need to call it as 'sayHello.bind(person, 21)()'

/** ================ */

// function sayHi() {
//     return(()=> 0)();
// }

// console.log(sayHi()); // 0 (returns 0 since it return invokes the arrow function. If not immediatly invoked, returns a function)
// console.log(typeof sayHi()); // number 

/** ================ */

// console.log(typeof (typeof 1)) // o/p: string ( typeof (number))

/** ================ */

// const numbers = [1, 2, 3]
// numbers[6] = 11;
// console.log(numbers) // [1, 2, 3, empty × 3, 11]

// index 3,4 & 5 will be empty.

/** ================ */

// const numbers = [1, 2, 3]
// numbers[3] = numbers;
// console.log(numbers) // The array numbers gets assigned to 3 index infinite times. 

/** ================ */

/**
 * Q. Everything in JS is either a ...... ?
 * 
 * 
 * Ans. primitive (like number, bool, string) or object
 */

/** ================ */

// console.log(!!null); // o/p: false (In JS null evals to false, !false is true & !true is false)
// console.log(!!""); // o/p: false (In JS "" evals to false, !false is true & !true is false)
// console.log(!!1); // o/p: true (In JS 1 evals to true, !true is false & !false is true)

/** ================ */

// console.log(setInterval(()=>console.log('Hi'), 1000))
// console.log(setInterval(()=>console.log('Hi'), 1000))
// console.log(setInterval(()=>console.log('Hi'), 1000))

// o/p : 1, 2, 3 then prints Hi (X 3times) for every 1000 msec.
// Here 1, 2 & 3 are the ids of setInterval, which can be used to identify them uniquely.  

/** ================ */

// console.log(...'anil') // o/p : ['a', 'n', 'i', 'l']

/** ================ */

// let data = 4 + 5 + '6'

// console.log (data) // 456
// console.log(typeof data) // string
// console.log(typeof 4 + 5+ '6') // number56  
// // Above stmt is treated as (typeof(4))5+'6 ==> number56

// console.log(typeof (4 + 5+ +'6')) // number

// console.log(typeof []) // object

// console.log([] == []) // false

// console.log([] == ![]) // true

/** ================ */

// const data = [1, 2, 3].map(num => {
//     if(typeof num === 'number') return
//     return num * 2;
// })

// console.log(data); // [undefined, undefined, undefined]

/** ================ */

// function getInfo(member) {
//     member.name = 'Anil'
// }

// const person = { name: 'Sarah'}

// getInfo(person);

// console.log(person); // {name: 'Anil'}

/** ================ */

// function car() {
//     this.make = 'Tata';
//     return { make : 'Kia'}
// }

// const car1 = new car();
// console.log(car1.make) // Kia (Because in a function if we are returning a value, it will overwite the key)

/** ================ */

// (()=> {
//     let x = (y = 10);
// })();

// console.log(typeof x) // undefined ==> scope of x is within the block
// console.log(typeof y) // number ===> y is not declared, hence it is hoisted to global scope with type as number. 
// console.log(y); // 10

/** ================ */

// (()=> {
//     let x = y = 10;
// })();

// (()=> {
//     let x = y = 20;
// })();

// console.log(y); // 20. 

/** ================ */

// let x = 100;
// (()=> {
//     var x = 20;
// })();

// console.log(x); // 100

/** ================ */

// console.log(!true - true); // -1

// !true is false and is converted to 0 when we have operator - in the expression. Also true is converted to 1. Hence 0 - 1 = -1

/** ================ */

// console.log(true + +'10'); // 11

/** ================ */

// console.log(typeof NaN) // number

/** ================ */

// console.log(NaN - '5') // NaN
// console.log(NaN + '5') // NaN5
// console.log(typeof NaN + '5') // number5
// console.log(NaN === NaN) // false

// console.log(1 < 2 < 3) // true (1 < 2 eval to true. Now, since we have < operator true will be converted to 1. 1 < 3 is true.)
// console.log(3 > 2 > 1) // false (3 > 2 is true. Now, since we have > operator true will be converted to 1. 1 > 1 is false)

/** ================ */
// let x;
// function func() {
//     console.log(x); // undefined
//     x = 20;
//     console.log(x); // 20
// }
// func();

/** ================ */

// const arr = [2,3,4,5];
// // Add 1 in the 0th index of the array

// const newArr = [1, ...arr]; // creates a new array
// const newArr1 = arr.map((ele) => Number('1'+ele));
// arr.unshift(1); // 

// console.log(newArr) // [1, 2, 3, 4, 5]
// console.log(newArr1) // [12, 13, 14, 15]
// console.log(arr) // [1, 2, 3, 4, 5]

// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

/** ================ */

//Write a program to check if palindrome

// const checkPalindrome = (checkWord) => {
//     let reversed = checkWord.split('').reverse().join('')
//     // var reversed = '';
//     // for(let i = checkWord.length - 1; i >=0; i--) {
//     //     reversed +=checkWord[i]
//     // }
//     return checkWord == reversed;
// }

// const word = 'malayalam';
// console.log(` ${word} is ${checkPalindrome(word) ? 'palindrome': 'not palindrome'} `);

/** ================ */

const x = 10;
function myFunction() {
  var x = 20; // shadowing occurs here
  console.log(x); // outputs 20
}

if(true) {
    const x = 30;
    console.log(x);
}

console.log(x); // outputs 10
myFunction();