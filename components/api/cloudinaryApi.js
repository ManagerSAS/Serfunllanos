import axios from "axios"

const cloudinaryApi = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/olivos-villavicencio/image/upload'
})

export default cloudinaryApi