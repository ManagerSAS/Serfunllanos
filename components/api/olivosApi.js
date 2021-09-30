import axios from "axios"

const END_POINTH = ''

const cloudinaryApi = axios.create({
    baseURL: END_POINTH,
    headers:{
        'Content-Type': 'application/json'
    }
})

export default cloudinaryApi