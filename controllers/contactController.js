const express = require('express');

//@desc - get all contacts
//@route GET /api/contact
//@access PUBLIC

const getContacts = (req,res) => {
    res.status(200).json({message: 'get all contacts'})
};

//@desc - create new contacts
//@route POST /api/contact
//@access PUBLIC
const createContact = (req,res) => {
    console.log("the request body is:", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error('All the fields are mandatory')
    }
    res.status(201).json({message: 'create contact'})
};

//@desc - update the contacts
//@route PUT /api/contact/:id
//@access PUBLIC
const updateContact = (req,res) => {
    res.status(200).json({message: `update contact for ${req.params.id}`})
}

//@desc - delete the contact
//@route DELETE /api/contact/:id
//@access PUBLIC
const deleteContact = (req,res) => {
    res.status(200).json({message: `delete contact for ${req.params.id}`})
};


//@desc - GET the contact
//@route GET /api/contact/:id
//@access PUBLIC
const getContact = (req,res) => {
    res.status(200).json({message: `get contact for ${req.params.id}`})
}
module.exports = {getContacts, createContact, updateContact, deleteContact, getContact};