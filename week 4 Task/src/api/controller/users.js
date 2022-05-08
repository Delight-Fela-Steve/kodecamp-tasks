const { Users } = require('../models/users');
const router = require('express').Router();
const {userValidation} = require('../validations/user.validation');
const bcrypt = require('bcryptjs');
require('dotenv').config()

router.get('/', async function getAllUsers(req,res){
    const users= await Users.find()
    return res.status(200).json(users)
})

router.post('/register', async function createUser(req,res){
    const data = req.body
    const {error, value} = await userValidation(data)
    if (error){
        return res.status(400).json({msg:error.details[0].message})
    }
    else{
        user_exists = await Users.findOne({email: value.email})
        if(user_exists){
            return res.status(400).json({"message":"email already exists"})
        }else{
            bcrypt.hash(value.password,parseInt(process.env.SALT),(err,hash)=>{
                 if (err){
                    return res.status(500).json({msg:"Internal Server Error"})
                 }else{
                    value.password = hash;
                    console.log(value)
                    const user = new Users(value)
                    user.save()
                    return res.status(201).json(user)
                 }
            })
            
        }
    }


})

router.get('/:id', async function getUser(req,res){
    Users.findById(req.params.id,(err,data)=>{
        if (err){
            console.log(err)
        }
        return res.status(200).json(data)
    })
})

router.put('/:id', async function updateUser(req,res){
    data = req.body
    Users.findByIdAndUpdate(req.params.id,data,{new:true}, (err, data)=>{
        if(err){
            console.log(err)
        }
        return res.status(200).json(data)
    })
})

router.delete('/:id', async function deleteUser(req,res){
    data = {"is_deleted":true}
    Users.findByIdAndUpdate(req.params.id, data, {new:true},(err, data)=>{
        if (err){
            console.log(err)
        }
        return res.status(200).json(data)
    })
})

module.exports = router;