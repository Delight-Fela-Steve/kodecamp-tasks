const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{type:String, required:true, immutable:true},
    price: Number,
    password:{type:String, required:true},
    is_deleted:{type:Boolean, default:false}
},{
    timestamps:true
})

exports.Users = mongoose.model('Users', userSchema)