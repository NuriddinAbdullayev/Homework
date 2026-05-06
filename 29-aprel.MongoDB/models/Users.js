const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  passwordHash: String,
  role: String,
  isActive: Boolean
});

module.exports = mongoose.model("Users", UserSchema);
