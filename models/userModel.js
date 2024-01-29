const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required:[true, "Please provide the name of the user"]
    },
    email: {
        type: String,
        required:[true, "Please provide the email of the user"],
        unique:[true, "email is already registered"]
    },
    password: {
        type: String,
        required:[true, "Please add the password for the user"]
    },
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('user', userSchema);