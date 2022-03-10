import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.publicapis.org/entries?category=books&https=true',
  // baseURL: 'https://www.googleapis.com/books/v1/volumes?q=books',
});
