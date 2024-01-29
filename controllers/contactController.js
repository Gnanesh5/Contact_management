const express = require('express');
const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel')

//@desc - get all contacts
//@route GET /api/contact
//@access PRIVATE

const getContacts = asyncHandler(async (req,res) => {
    const contact = await Contact.find({user_id:req.user.id});
    res.status(200).json({contact})
});

//@desc - create new contacts
//@route POST /api/contact
//@access PRIVATE
const createContact = asyncHandler(async (req,res) => {
    
    console.log("the request body is:", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error('All the fields are mandatory')
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json({contact})
});

//@desc - update the contacts
//@route PUT /api/contact/:id
//@access PRIVATE
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404);
        throw new Error("Contact not foud with this id")
    }
    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        res.json({message: "Unauthorised user is trying to access the account"})
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json({updatedContact})
})

//@desc - delete the contact
//@route DELETE /api/contact/:id
//@access PRIVATE
const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not foud with this id")
    }
    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        res.json({message: "Unauthorised user is trying to access the account"})
    }
    await contact.deleteOne({_id: req.params.id});
    res.status(200).json({message: `the contact deleted is: ${contact}`})
});


//@desc - GET the contact
//@route GET /api/contact/:id
//@access PRIVATE
const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404);
        throw new Error("Contact not foud with this id")
    }
    res.status(200).json({contact})
})
module.exports = {getContacts, createContact, updateContact, deleteContact, getContact};