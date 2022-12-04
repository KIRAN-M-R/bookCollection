import axios from 'axios';

export const addBook = (newBook) => axios.post('http://localhost:5000/books', newBook);