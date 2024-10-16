/**
 * The rest paramter syn allows function to accept an
 * indefinite number of args as an array.
 * 
 * sync 1. func(arg1, arg2, ...args)
 * sync 1. func(...args)
 */

// function sum(...args) {
//    return args.reduce((acc, val) => acc + val)
// }

const sum = (...args) => args.reduce((acc, val) => acc + val)

let sum1 = sum(1,2,3);
let sum2 = sum(2,4, 6, 8);

console.log(sum1);
console.log(sum2);

const calculate = (type, ...args) => {
   return type(...args);
}
console.log(calculate(sum, 5, 6));
