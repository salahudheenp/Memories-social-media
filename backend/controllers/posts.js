import mongoose from 'mongoose'
import postMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const messages = await postMessage.find()

        res.status(200).json(messages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;


    const newPostMessage = new postMessage({ title, message, selectedFile, creator, tags })

    console.log(newPostMessage, 'post data aa ');
    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}



export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that is')
    const updatedPost = await postMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

    res.json(updatedPost)
}



export const deletePost = async (req, res) => {
    const { id: _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that is')
    await postMessage.findByIdAndRemove(_id)

    res.json({ message: 'Post deleted' })
}


export const likePost = async (req, res) => {
    const { id } = req.params
    console.log(id, '**********');
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
    const post = await postMessage.findById(id)
    console.log(post, 'likepost');
    const like = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })

    res.json(like)
}