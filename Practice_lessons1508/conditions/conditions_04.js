"use strict";

/**
Complete the function evenOrOdd such that it returns the string "even"
when the number parameter it receives is even and "odd" otherwise.

Tests
Implements evenOrOdd() for even numbers
Implements evenOrOdd() for odd numbers
/**
 * @param {string} number
 */
function evenOrOdd(number) {
    if (Number.parseInt(number % 2 ) === 0) { 
    return 'even';
 }  
    return 'odd';
}

console.log(evenOrOdd(7));
console.log(evenOrOdd(8));