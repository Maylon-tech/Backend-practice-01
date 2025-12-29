import express from 'express'

const app = express()
app.use(express.json())

// Routes import
import userRouter from './routes/userRoutes.js'
// Create Post Router
import postRouters from './routes/postRouters.js'

// import postRouter from './routes/postRoutes.js'

// route declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/posts", postRouters)
// app.use("/api/v1/post", postRouter)

export default app