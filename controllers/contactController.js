const express = require('express');
const asyncHandler = require('express-async-handler');

//@desc - get all contacts
//@route GET /api/contact
//@access PUBLIC

const getContacts = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'get all contacts'})
});

//@desc - create new contacts
//@route POST /api/contact
//@access PUBLIC
const createContact = asyncHandler(async (req,res) => {
    console.log("the request body is:", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error('All the fields are mandatory')
    }
    res.status(201).json({message: 'create contact'})
});

//@desc - update the contacts
//@route PUT /api/contact/:id
//@access PUBLIC
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `update contact for ${req.params.id}`})
})

//@desc - delete the contact
//@route DELETE /api/contact/:id
//@access PUBLIC
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `delete contact for ${req.params.id}`})
});


//@desc - GET the contact
//@route GET /api/contact/:id
//@access PUBLIC
const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `get contact for ${req.params.id}`})
})
module.exports = {getContacts, createContact, updateContact, deleteContact, getContact};