import express from 'express'
const postRouter = express.Router()

import { createPost, deletePost, getPosts, updatePost } from '../controllers/postController.js'

postRouter.post("/create", createPost)
postRouter.get("/getPosts", getPosts)
postRouter.put("/update/:id", updatePost)
postRouter.delete("/delete/:id", deletePost)



export default postRouter