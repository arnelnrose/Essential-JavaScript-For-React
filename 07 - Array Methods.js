// JavaScript provides a rich set of array methods that allow developers to manipulate, iterate, and perform operations on arrays. Here's a categorized overview of common array methods:

// 1.) Push - inserts an element into an array

// let salad = ["Macaroni", "Nestle Cream", "Condensed Milk", "Cheese"];
// salad.push("Kaong");
// console.log(salad);

// 2.) Pop - The easiest way to remove a single element from an array

// let salad = ["Macaroni", "Nestle Cream", "Condensed Milk", "Cheese"];
// salad.pop();
// console.log(salad);

// 3.) Splice - Method changes the contents of an array by removing or replacing
// existing elements and/or adding new elements in place

let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February");
console.log(months);

months.splice(4, 1, "May");
console.log(months);

