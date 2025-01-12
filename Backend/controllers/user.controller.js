const { validationResult } = require("express-validator");
const userModel = require("../models/user.model.js");
const userService = require('../services/user.service.js');

module.exports.registerUser =  async (req,res , next )=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {firstName , lastName , email , password} = req.body;
    
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    const token = user.generateAuthToken();
    // why user and userModel
    // promise and async

    res.status(201).json({token, user});

}

module.exports.loginUser = async (req,res, next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email , password } = req.body;
    const user = await userModel.findOne({email: email}).select("+password");
    if(!user){
        return res.status(401).json({message:"Invalid email or password"});
    }

    const isSame = await user.comparePassword(password);

    if(!isSame){
        return res.status(401).json({message:"Invalid password"});
    }

    const token = user.generateAuthToken();

    return res.status(200).json({token , user});
}