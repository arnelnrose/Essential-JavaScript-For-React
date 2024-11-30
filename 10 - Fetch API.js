const url = "https://jsonplaceholder.typicode.com/posts/1";

const fetchPromise = fetch(url);

fetchPromise
    .then((response) => response.json())
    .then((response) => console.log(response));