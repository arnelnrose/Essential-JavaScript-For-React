// The ternary operator is a shorthand conditional operator that allows you to write a simple if-else statement in a single line. It evaluates a condition and returns one of two values depending on whether the condition is true or false.

// Syntax
// condition ? valueIfTrue : valueIfFalse;

// Example
// let isHot = true;
// let water = isHot ? true : false;
// console.log(water); // output is true

// let isHot = false;
// let water = isHot ? "It is very hot." : "No, it is cold.";
// console.log(water); // output is No, it is cold.

// Nested if else statement
let grade = 70;
let mark = "";

if (grade >= 90) {
    mark = "A";
} else if (grade >= 80) {
    mark = "B";
} else if (grade >= 70) {
    mark = "C";
} else {
    mark = "D";
}

console.log(mark); // Output is 70

// Convert to ternary operator
let finalMark = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "D";

console.log(finalMark);

