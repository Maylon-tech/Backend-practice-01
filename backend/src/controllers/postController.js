import { GiPostStamp } from 'react-icons/gi'
import { Post } from '../models/post.js'

// Create post
export const createPost = async (req, res) => {

    try {
        const { name, description, age } = req.body
        if (!name || !description || !age) {
            return res.status(400).josn({
                message: "All fields are required."
            })
        }
        const post = await Post.create({ name, description, age })

        res.status(201).json({
            message: "Post created successfully.", post
        })

    } catch (error) {
        res.status.json({ message: "Internal Server Error..!!"})
    }
}
 
// Read All Posts
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error."
        })
    }
}