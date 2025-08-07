const jwt = require('jsonwebtoken');
const Admin = require('../Models/AdminModel');
const Client = require('../Models/ClientModel');

exports.verifyAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET); 

        let user = await Admin.findById(decoded.id);

        if (!user) {
            user = await Client.findById(decoded.id);
            if (!user) {
                return res.status(404).json({ message: 'Please fix your credentials.' });
            }
        }

        req.user = user;
        req.role = user instanceof Admin ? 'admin' : 'client';

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token', error: error.message });
    }
};


exports.adminTokenVerifier = async(req, res)=>{
    try {
        const {token} = req.body;

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        
    }
}