const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true,
    },
},{timestamps: true});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;