const mongoose = require('mongoose')

const settingsSchema = mongoose.Schema({
  fontSize: {
    type: String,
    enum: ["small", "normal", "large"],
    default: "normal",
  },
  language: {
    type: String,
    default: "english",
  },
  language: {
    type: String,
    default: "primaryLight",
  },
}) 

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, 'Name must have a minimum length of 3 characters'],
      maxLength: [50, 'Name must have a maximum length of 50 characters'],
      required: [true, 'Please add a name'],
    },
    phone: {
      type: Number,
      required: [true, 'Please add an phone number'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    settings: {
      type: settingsSchema
    },
    total_lending: {
      type: Number
    },
    total_borrowing: {
      type: Number
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
