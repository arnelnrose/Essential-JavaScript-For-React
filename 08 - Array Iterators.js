// Array iterators in JavaScript are methods provided by the Array object that allow you to traverse, process, and manipulate array elements in a more functional and expressive way. They offer a structured way to iterate over arrays and often take callback functions as arguments to apply operations on each array element. Below is a breakdown of key array iterator methods

let students = [
    {
        id: 1,
        f_name: "Juan",
        l_name: "dela Cruz",
        gender: "M",
        age: 25,
        paid: 250,
        courses: ["JavaScript", "React"],
    },
    {
        id: 2,
        f_name: "Pedro",
        l_name: "Gil Puyat",
        gender: "M",
        age: 41,
        paid: 300,
        courses: ["JavaScript", "React"],
    },
    {
        id: 3,
        f_name: "James",
        l_name: "Replan",
        gender: "M",
        age: 35,
        paid: 500,
        courses: ["JavaScript", "React", "UX"],
    },
];

// Example 1 - map method
// const newStudents = students.map((student, index) => {
//     return student;
// });
// console.log(newStudents);

// Example 2 - filter method
// const newStudents = students.filter((student) => student.l_name === "dela Cruz");
// console.log(newStudents);

// Example 3 - filter method
// let studentBelow30 = students.filter((student) => student.age < 30);
// console.log(studentBelow30);

// Example 4 - some method
// let hasStudentBelow30 = students.some((student) => student.age < 30);
// console.log(hasStudentBelow30);

// Example 5 - find method
// let studentAbove30 = students.find((student) => student.age > 30);
// console.log(studentAbove30);

// Example 6 - reduce method
let totalCost = students.reduce((accumulator, student) => {
        accumulator = accumulator + student.paid;
        return accumulator;
    }, 0
);
console.log(totalCost);
