const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: [true, "User Name is required"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)