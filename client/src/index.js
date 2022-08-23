// ESM, Node.js (type="module")
// import { fetchBooks } from './utils/index.js';

// fetchBooks(1200)
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error.message));

// http://localhost:4000/books

async function fetckBooks() {
  try {
    const response = await fetch('http://localhost:4000/books');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
  }
}

fetckBooks();
