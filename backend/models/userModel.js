const mongoose = require('mongoose')

// const settingsSchema = new mongoose.Schema({
//   fontSize: {
//     type: String,
//     enum: ["small", "normal", "large"],
//     default: "normal",
//   },
//   language: {
//     type: String,
//     default: "english",
//   },
//   theme: {
//     type: String,
//     default: "primaryLight",
//   },
// }) 

const userSchema = new mongoose.Schema(
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
      fontSize: {
        type: String,
        enum: ["small", "normal", "large"],
        default: "normal",
      },
      language: {
        type: String,
        default: "english",
      },
      theme: {
        type: String,
        default: "primaryLight",
      },
    },
    total_lending: {
      type: Number,
      default: 0,
    },
    total_borrowing: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
