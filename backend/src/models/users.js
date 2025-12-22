import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 15
    }
},
    {
        timestamps: true,
    }
)

// Before saving any password we need to hash it (Cryptography)
usersSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    
    this.password = await bcrypt.hash(this.password, 10)

    next()
})

// Compare passowrds
usersSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}



export const Users = mongoose.model("Users", usersSchema)
