const user = require('../models/user.model')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const tokenService = require('./token.service')

const createUser = async (body) => {
    const { password, email, ...rest}  = body
    let hashPassword;
    hashPassword = bcrypt.hashSync(password, 8);
    const existingEmail = await user.findOne({email: email}) 
    console.log(existingEmail)
    if (!existingEmail) {
        const newUser = await user.create({
            password: hashPassword,
            email: email,
            ...rest
        })
        const accessToken = tokenService.generateToken("accessToken", newUser)
        const refreshToken = tokenService.generateToken("refreshToken", newUser)
        // console.log(refreshToken)
        // return {...existingUser, accessToken: accessToken}
        // return { user: {...existingUser, accessToken: accessToken, refreshToken: refreshToken}, refreshToken: refreshToken }
        // console.log(newUser)
        
        return {newUser: newUser, accessToken: accessToken}
    } else {
        return {}
    }
    
    // console.log(newUser)
    
}

const findUser = async (body) => {
    const { email, password } = body
    console.log(email, password)
    // console.log(email, password)
    let existingUser;
    existingUser = await user.findOne({email: email})
    console.log(existingUser)
    let isValidPassword = false;
    if (existingUser) isValidPassword = await bcrypt.compare(password, existingUser.password)
    // console.log(isValidPassword)

    /*try {
        isValidPassword = await bcrypt.compare(password, existingUser.password)
        console.log(isValidPassword)
    } catch(err) {
        console.log(err)
    }
    if (isValidPassword) {
        const accessToken = jwt.sign({
            id: existingUser._id,
            email: existingUser.email
        },
        process.env.JWT_ACCESS_KEY, {
            expiresIn: "2h"
        })
        return { ...existingUser, accessToken: accessToken}
    } else {
        return null
    }*/
    else isValidPassword = false

    if (isValidPassword) {
        const accessToken = tokenService.generateToken("accessToken", existingUser)
        const refreshToken = tokenService.generateToken("refreshToken", existingUser)
        // console.log(refreshToken)
        // return {...existingUser, accessToken: accessToken}
        return { user: {...existingUser, accessToken: accessToken, refreshToken: refreshToken}, refreshToken: refreshToken }
    } else {
        return {}
    }
}

module.exports = {
    createUser,
    findUser
}