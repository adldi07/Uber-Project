const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require("../models/user.model.js");
const captianModel = require("../models/captian.model.js");
const blacklistTokenModel = require('../models/blacklistToken.model.js');

module.exports.authUser = async (req, res, next )=>{
    // console.log(req.headers);
    const token = req.cookies.token || req.headers.authorization?.split("Bearer ")[1];
    // console.log(token);

    if(!token){
        return res.status(401).json({message: "Unauthorised"});
    }   

    const isBlacklisted = await blacklistTokenModel.findOne({token: token });

    if(isBlacklisted){
        return res.status(401).json({message :"Unauthorized "});
    }

    
    try {
       
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

};

module.exports.authCaptian = async (req, res, next )=>{

    const token = req.cookies.token || req.headers.authorization?.split("Bearer ")[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token});
    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'});
    }
    try {
        const captianId = jwt.verify(token,process.env.JWT_SECRET);
        const captian = await captianModel.findById(captianId._id);

        if(!captian){
            return res.status(401).json({message:'Invalid Token'});
        }

        req.captian = captian ;
        next();
        
    } catch (error) {
        console.log('error in captian middleware ', error);
        return res.status(401).json({message: "catch error in captian middleware"});
    }

}