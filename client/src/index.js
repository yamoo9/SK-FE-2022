// ESM, Node.js (type="module")
import { fetchBooks } from './utils/index.js';

fetchBooks(1200)
  .then((response) => console.log(response))
  .catch((error) => console.error(error.message));
