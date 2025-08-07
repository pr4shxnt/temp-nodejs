const jwt = require('jsonwebtoken');
const Admin = require('../Models/AdminModel');
const Client = require('../Models/ClientModel');


exports.registerAdmin = async(req, res)=>{
    try {
       
    } catch (error) {
        
    }
}

exports.loginAdmin = async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
}

exports.registerClient = async(req, res)=>{
    try {
        const {name, email, password, house, address} = req.body;
    } catch (error) {
        
    }
}

exports.loginClient = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}