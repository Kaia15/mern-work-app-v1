const user = require('../models/user.model')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const tokenService = require('./token.service')

const getUsers = async () => {
    return user.find();
}

const getUser = async(id) => {
    return user.findById(id);
}

const editUser = async(id, fields) => {
    console.log(fields)
    return user.findByIdAndUpdate(id, fields, {new: true})
}

const getReview = async (id) => {
    // console.log(id)
    const review = await user.findById(id)
    const { username, name, email } = review
    return { username: username, name: name, email: email}
}

module.exports = {
    getUsers,
    getUser,
    editUser,
    getReview
    // createUser,
    // findUser
}