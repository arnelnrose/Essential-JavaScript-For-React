// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows developers to handle asynchronous code in a more manageable and readable way compared to callbacks.

// Key Characteristics of Promises:
// States: A Promise has three states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation was successful, and the Promise has a result.
// Rejected: The operation failed, and the Promise has a reason for the failure (an error).
// Immutable Resolution: Once a Promise is either fulfilled or rejected, its state cannot change.

// Chaining: Promises support chaining with .then(), .catch(), and .finally() methods, making it easier to handle sequences of asynchronous operations.

// Eample 1
// let promise = new Promise((resolve, reject) => {
//     const i = "Promise";
//     i === "Promise" ? resolve() : reject();
// });

// promise
//     .then(() => console.log("Promise was resolve."))
//     .catch(() => console.log("Promise was rejected."));

// Eample 2
let promise = new Promise((resolve, reject) => {
    const i = "Promise";
    i != "Promise" ? resolve() : reject();
});

promise
    .then(() => console.log("Promise was resolve."))
    .catch(() => console.log("Promise was rejected."));