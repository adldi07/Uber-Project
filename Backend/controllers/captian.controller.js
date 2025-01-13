const blacklistTokenModel = require('../models/blacklistToken.model');
const captianModel = require('../models/captian.model');
const captianService = require('../services/captian.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptian = async (req, res, next )=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log('these are some errors');
        return res.status(400).json({errors: errors.array()});
    }

    const {fullName , email , password , vehicle} = req.body;
    const captianAlreadyExist = await captianModel.findOne({email});
    if(captianAlreadyExist){
        return res.status(400).json({message:'Captian already exit with this email id'});
    }
    
    const hashedPassword = await captianModel.hashPassword(password);

    const captian = await captianService.createCaptian({
        firstName:fullName.firstName,
        lastName:fullName.lastName,
        email ,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate ,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType,
    });

    const token = captian.generateAuthToken();

    return res.status(201).json({token ,captian});
}

module.exports.loginCaptian = async (req, res, next )=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log('there are some errors in login req');
        return res.status(401).json({errors : errors.array()});
    }

    const {email , password} = req.body;

    const captian = await  captianModel.findOne({email:email}).select('+password');
    if(!captian){
        return res.status(401).json({message:'Invalid email'});
    }

    const isValid = await captian.comparePassword(password);
    if(!isValid){
        return res.status(401).json({message:'Invalid password'});
    }   

    const token = captian.generateAuthToken();
    res.cookie('token',token);

    return res.status(200).json({token , captian });    
}

module.exports.getCaptianProfile = (req, res, next )=>{
    return res.status(200).json({captian:req.captian});
}

module.exports.logOutCaptian = async (req,res, next)=>{
    const token = req.cookies.token || req.headers.authorization.split("Bearer ")[1];
    res.clearCookie('token');
    await blacklistTokenModel.create({
        token,
    });
    return res.status(200).json({message:'Captian LogOut'});
}