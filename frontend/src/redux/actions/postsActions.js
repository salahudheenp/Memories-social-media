import { axiosInstance } from '../../api/index'
import { FETCH_ALL, FETCH_ERROR, LIKE_POST, CREATE, CREATE_ERROR, UPDATE_POST, UPDATE_ERROR, DELETE_POST } from '../actions/types'


// Action creators
import axios from 'axios'
const url = 'http://localhost:5000/posts'


export const getPosts = () => async (dispatch) => {
    try {


        const { data } = await axiosInstance.get(url)

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {

        dispatch({ type: FETCH_ERROR, payload: console.log(error) })
    }
}


export const createPost = (postData) => async (dispatch) => {
    console.log(postData, 'actio****');
    try {
        const { data } = await axiosInstance.post(url, postData)
        dispatch({ type: CREATE, payload: data })


    } catch (error) {
        dispatch({ type: CREATE_ERROR, payload: console.log(error) })

    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await axiosInstance.patch(`${url}/${id}`, updatedPost)
        dispatch({ type: UPDATE_POST, payload: data })

    } catch (error) {
        dispatch({ type: UPDATE_ERROR, payload: console.log(error) })


    }
}


export const deletePost = (id, post) => async (dispatch) => {
    try {
        await axiosInstance.delete(`${url}/${id}`)
        dispatch({ type: DELETE_POST, payload: id })

    } catch (error) {
        // dispatch({ type: UPDATE_ERROR, payload: console.log(error) })
        console.log(error)

    }
}


export const likePost = (id, post) => async (dispatch) => {
    console.log(id, '****');
    try {
        const { data } = await axiosInstance.patch(`${url}/${id}/likePost`)
        dispatch({ type: LIKE_POST, payload: data })

    } catch (error) {
        console.log(error)


    }
}



