const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captianSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type: String ,
            required: true ,
            minlength:[3,'FirstName should have at least 3 character'],
        },
        lastName:{
            type:String ,
            minlength:[3, 'last name must have at least 3 character'],
        },
    },
    email:{
        type:String ,
        required:true ,
        unique: true ,
    },
    password:{
        type:String ,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
    status:{
        type:String ,
        enum :['Active', 'Inactive'],
        default:'Inactive',
    },
    vehicle:{
        color:{
            type:String,
            required:true ,
            minlength: [3, 'Color must have at least 3 character'],
        },
        plate:{
            type: String,
            required:true,
            minlength:[3, 'plate must have at least 3 character'],
        },
        capacity:{
            type:Number,
            required:true ,
            minlength:[1,'Vehicle must have capacity of min 1'],
        },
        vehicleType:{
            type: String,
            required:true ,
            enum:['car','auto', 'motorcycle'],
        },
        location:{
            lat:{
                type:Number,
            },
            lng:{
                type:Number,
            },
        }
    }
});

captianSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn:'24h'});
    return token;
}

captianSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captianSchema.statics.hashPassword = async function(password){
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

const captianModel = mongoose.model('captian', captianSchema);

module.exports = captianModel;