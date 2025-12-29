import express from 'express'
const postRouter = express.Router()

import { createPost, getPosts } from '../controllers/postController.js'

postRouter.post("/create", createPost)
postRouter.get("/getPosts", getPosts)



export default postRouter