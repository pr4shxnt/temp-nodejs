const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    clientId: {type: String, required: true},
    addresses: {type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", clientSchema);
