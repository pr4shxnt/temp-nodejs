const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    address: {type: String, required: true},
    disposed: {type: String, required: true}
  },
  { timestamps: true }
);

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;