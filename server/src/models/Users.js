const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  bio: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  createdOn: { type: Date, required: true },
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
