const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require("../models/user.model.js");

module.exports.authUser = async (req, res, next )=>{
    
    try {
        // console.log(req.headers);
        const token = req.cookies.token || req.headers.authorization.split("Bearer ")[1];
        // console.log(token);

        if(!token){
            return res.status(401).json({message: "Unauthorised"});
        }   
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
    
        if(!user){
            return res.json({message:" invalid token"});
        }
    
        req.user = user;
        next();
        
    } catch (error) {
        // console.log("Error", error);
        return res.status(401).json({message:"catch error"});
    }

}