import express from 'express'
import { LoginUser, logoutUser, registerUser } from '../controllers/usersControllers.js'
const router = express.Router()

router.post("/register", registerUser)
router.post("/login", LoginUser)
router.post("/logout", logoutUser)


export default router