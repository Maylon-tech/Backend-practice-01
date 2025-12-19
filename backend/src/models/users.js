import mongoose from 'mongoose'

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

export const Users = mongoose.model("Users", usersSchema)
