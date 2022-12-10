import axios from 'axios';

export const addBook = (newBook) => axios.post('http://localhost:5000/books', newBook);
export const getBooks = () => axios.get('http://localhost:5000/books');