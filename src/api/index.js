import axios from "axios"

// Function untuk melakukan fetch API /posts
const url = 'https://jsonplaceholder.typicode.com'
const poke_url = 'https://pokeapi.co/api/v2'
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
    return fetch(`${url}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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