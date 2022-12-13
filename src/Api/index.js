import axios from 'axios';
const BASE_URL = "http://localhost:5000";
export const addBook = (newBook) => axios.post(`${BASE_URL}/books`, newBook);
export const getBooks = () => axios.get(`${BASE_URL}/books`);
export const updateBook = (id, updatedBook) => axios.patch(`${BASE_URL}/books/${id}`, updatedBook);
export const deleteBook = (id) => axios.delete(`${BASE_URL}/books/${id}`);
export const getBookBySearch = (search) => axios.get(`${BASE_URL}/books/search?searchQuery=${search}`);