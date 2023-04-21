import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    }
})




// export const fetchPosts = async () => await API.get(url)

// export const createPost = async (newPost) => {
//     const data = await API.post(url, newPost)
//     return data
// }