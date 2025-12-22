import { Users } from '../models/users.js'

export const registerUser = async (req, res) => {

    try {
        const { username, email, password } = req.body

        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are important!" })
        }

        // Check if user exist already
        const existUser = await Users.findOne({ email: email.toLowerCase() })
        
        if (existUser) {
            return res.status(400).json({ message: "User already exists.!" })
        }
        // Create User
        const user = await Users.create({
            username,
            email: email.toLowerCase(),
            password,
        })

        res.status(201).json({
            message: "User registered",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error",  error: error.message })
    }


}

export const LoginUser = async (req, res) => {

    try {
        const { email, password } = req.body

        const user = await Users.findOne({
            email: email.toLowerCase()
        })

        if (!user) {
            return res.status(400).json({ message: "User Not Found.!" })
        }

        // Bcrypt security - Compare Passwords
        const isMatch = await user.comparePassword(password) 
        if(!isMatch) return res.status(400).json({ message: "Invalid Crendentials." })
          
        res.status(200).json({
            message: "User logged in.",
            user: {
                id: user._id,
                emaiil: user.email,
                username: user.username
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error.!!..."
        })
    }
}