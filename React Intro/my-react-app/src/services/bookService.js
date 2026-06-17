import axios from "axios"

const API = "https://booksbackend-3rhc.onrender.com/books"

export const getBooks = () => {
    return axios.get(API)
}

export const createBook = (book) => {
    return axios.post(API, book)
}

export const updateBook = (id, book) => {
    return axios.put(`${API}/${id}`, book)
}

export const deleteBook = (id) => {
    return axios.delete(`${API}/${id}`)
}