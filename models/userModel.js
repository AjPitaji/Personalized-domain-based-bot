const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Define the User schema with a single array of chat objects
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  chats: {
    type: [
      {
        query: String,
        answer: String,
      },
    ],
    default: [], // Default value is an empty array
  },
});

module.exports = mongoose.model("User", UserSchema);
