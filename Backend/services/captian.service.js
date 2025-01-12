const captianModel = require('../models/captian.model');

module.exports.createCaptian = async ({firstName, lastName, email , password ,
     color , plate , capacity, vehicleType })=>{
        if(!firstName || !email || !password || !color || !plate || !capacity || !vehicleType){
            throw new Error('Some fields are vacant');
        }
        
        const captian = await captianModel.create({ 
            fullName:{
                firstName,
                lastName,
            },
            email,
            password,
            vehicle:{
                color,
                plate , 
                capacity,
                vehicleType,
            },
        });
        return captian;
}