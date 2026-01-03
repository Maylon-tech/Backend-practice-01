import express from 'express'
import { getUser, LoginUser, logoutUser, registerUser } from '../controllers/usersControllers.js'
const router = express.Router()

router.post("/register", registerUser)
router.post("/login", LoginUser)
router.post("/logout", logoutUser)
router.get("/getUser", getUser)


export default router