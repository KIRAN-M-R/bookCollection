import axios from 'axios';

export const addBook = (newBook) => axios.post('http://localhost:5000/books', newBook);
export const getBooks = () => axios.get('http://localhost:5000/books');
export const updateBook = (id, updatedBook) => axios.patch(`http://localhost:5000/books/${id}`, updatedBook);
export const deleteBook = (id) => axios.delete(`http://localhost:5000/books/${id}`);
export const getBookBySearch = (search) => axios.get(`http://localhost:5000/books/search?searchQuery=${search}`);