import axios from "axios"

// Function untuk melakukan fetch API /posts
const url = process.env.URL_APP
const poke_url = process.env.URL_POKE
const products_url = process.env.URL_PRODUCTS // https://6523e69dea560a22a4e9019e.mockapi.io/api/v1/
// `${products_url}/products
export const getPosts = () => {
    return fetch(`${url}/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getProducts = () => {
    return axios(`${products_url}/products`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getPostsWithID = (id) => {
    return fetch(`${url}/posts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const sendPostData = (data) => {
    const token = sessionStorage.getItem('token')
    return fetch(`${url}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // token diambil dari response setelah login dari API
        },
        body: JSON.stringify(data) // paramater/data yang dikirimkan ke API 
    })
}

export const fetchPokemons = () => {
    // return axios.get(poke_url)
    return axios({
        url: `${poke_url}/pokemon`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// call api /login
export const fetchLogin = (data) => {
    console.log('param login', data);
    return axios({
        url: `https://usman-fake-api.herokuapp.com/api/auth`,
        method: 'POST',
        body: {
            "email": data.email,
            "password": data.password
        }
    })
}