import axios from "axios"

const API = "https://booksbackend-3rhc.onrender.com"

export const registerUser = (user) => {
    return axios.post(`${API}/register`, user)
}

export const loginUser = (user) => {
    return axios.post(`${API}/login`, user)
}

export const getProfile = (token) => {
    return axios.get(`${API}/profile`, 
        {headers: {
            Authorization: `Bearer ${token}`
        }}
    )
}