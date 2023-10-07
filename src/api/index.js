import axios from "axios"

// Function untuk melakukan fetch API /posts
const url = process.env.URL_APP
const poke_url = process.env.URL_POKE
export const getPosts = () => {
    return fetch(`${url}/posts`, {
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