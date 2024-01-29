const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const bcrypt = require('bcrypt');

//@desc - register a user
//@route POST /api/users/register
//@access PUBLIC

const registerUser = asyncHandler(async(req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const existingUser = await User.findOne({email});
    if(existingUser) {
        res.status(400);
        throw new Error("User is already registered")
    }
    const encryptPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        password : encryptPassword
    })
    if(user) {
        res.status(201).json({_id: user.id, email: user.email})
    } else {
        res.status(400);
        throw new Error("No user is created/ not valid")
    }
    res.status(201).json({user})
})


//@desc - login a user
//@route POST /api/users/login
//@access PUBLIC

const loginUser = asyncHandler(async(req, res) => {
    
    const user = await User.find();
    if(!user) {
        res.status(404);
        throw new Error("No user found with the detaisl provided")
    }
    res.status(200).json({user})
})


//@desc - get current user details
//@route GET /api/users/current
//@access PRIVATE

const currentUser = asyncHandler(async(req, res) => {
    res.json({message:"current user information"})
})


module.exports = {registerUser, loginUser, currentUser}
