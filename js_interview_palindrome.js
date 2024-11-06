// Question 1. Palindrome Number
// An integer is Palindrome if it reads the same forward and backward.

//Input: x = 121 --------->>>>>  Output: true
//Input: x = 10 --------->>>>>  Output: false

function isPalndrome(x) {
    return x === +x.toString().split('').reverse().join('')
}

console.log(isPalndrome(10))