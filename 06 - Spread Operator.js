// The spread operator (...) is a syntax in JavaScript used to expand an array, object, or iterable into its individual elements. It allows you to make concise and flexible operations such as combining arrays, cloning objects, and passing elements to functions.

// const body = ["Head", "Knees"];
// const completeBody = ["Toes", "Shoulder", ...body];
// console.log(completeBody);

// const person = {
//     name: "Juan dela Cruz",
//     age: 25,
// };

// const contactPerson = {
//     contactNumber: "09181234567",
//     ...person,
// };

// console.log(contactPerson);

const numbers = [1, 2, 3];

function sum(a, b, c) {
    return a + b + c;
}

//  console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(...numbers));

 
