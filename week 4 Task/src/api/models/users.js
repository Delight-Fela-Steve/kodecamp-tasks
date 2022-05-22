const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{type:String, required:true, immutable:true},
    role: String,
    password:{type:String, required:true, select:false},
    refreshToken:{type:String, default:'', select:false},
    is_deleted:{type:Boolean, default:false}
},{
    timestamps:true
})

exports.Users = mongoose.model('Users', userSchema)