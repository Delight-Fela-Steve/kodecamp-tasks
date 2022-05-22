const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{type:String, required:true, immutable:true},
    role: String,
    password:{type:String, required:true},
    refreshToken:{type:String, default:''},
    is_deleted:{type:Boolean, default:false}
},{
    timestamps:true
})

exports.Users = mongoose.model('Users', userSchema)