const url = "https://jsonplaceholder.typicode.com/posts/1";

// const fetchPromise = fetch(url);

// fetchPromise
//     .then((response) => response.json())
//     .then((response) => console.log(response));

const fetchPromise = async () => {
    const res = await fetch(url);
    const response = await res.json();
    console.log(response);
};

fetchPromise();
