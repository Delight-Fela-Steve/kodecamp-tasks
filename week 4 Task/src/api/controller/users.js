const { Users } = require('../models/users');
const router = require('express').Router();
const {userValidation} = require('../validations/user.validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const salt = parseInt(process.env.SALT);

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
            hashedPassword = await bcrypt.hash(value.password,salt);
            value.password = hashedPassword;
            const user = new Users(value)
            refreshToken = jwt.sign({_id:user._id, role:user.role},process.env.REFRESH_TOKEN_SECRET, {expiresIn:'1d'})
            accessToken = jwt.sign({_id:user._id, role:user.role},process.env.ACCESS_TOKEN_SECRET, {expiresIn:'15m'})
            user.refreshToken = refreshToken
            user.save()
            return res.cookie('auth_token',refreshToken, {httpOnly:true, maxAge:24*60*60*1000, sameSite:'None', secure:true}).status(201).json({msg:"User Created Successfully", data:user, "token":accessToken});
        }
    }
})


router.put('/:id/passwordUpdate', async function updatePassword(req,res){
    oldPassword = req.body.oldPassword;
    newPassword = req.body.newPassword;
    if(oldPassword && newPassword){
        Users.findById(req.params.id, async (err,user)=>{
            if (err){
                console.log(err)
            }
            hashedOldPassword = await bcrypt.compare(oldPassword,user.password); 
            if(hashedOldPassword){
                hash = await bcrypt.hash(newPassword,salt)
                data = {password:hash}
                Users.findByIdAndUpdate(req.params.id, data, {new:true},(err,user)=>{
                    if (err) console.log(err);
                return res.status(201).json(user)
                })
            }else{
                return res.status(400).json({msg:"Invalid credentials"})
            }
        })
    }else{
        return res.status(400).json({msg:"Invalid credentials"})
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
    delete data.password
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