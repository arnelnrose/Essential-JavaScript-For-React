// Destructuring in JavaScript is a shorthand syntax that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a more concise and readable way to extract multiple values from data structures.

// Types of Destructuring:
// Array Destructuring: Used to extract elements from arrays.
// Object Destructuring: Used to extract properties from objects.

// const objects = ["table", "phone", "apple", "test"];
// const [furniture, phone, fruit, test] = objects;
// console.log(furniture, phone, fruit, test);

const person = {
    name: "Juan dela Cruz",
    age: 22,
    birthdate: new Date(),
    status: "Single"
};

const { name, age, birthdate, status } = person;
console.log(person);
