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