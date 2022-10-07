const authService = require('../../../services/auth.service')
// const user = require('../../../models/user.model')
const bcrypt = require('bcrypt')
const cookies = require('cookie-parser')
const jwt = require('jsonwebtoken')
const tokenService = require('../../../services/token.service')

const createUser = async (req, res, next) => {
    try {
      const {newUser, accessToken} = await authService.createUser(req.body);
      // console.log({...newUser, accessToken: accessToken})
      const user = {...newUser, accessToken: accessToken}
      console.log(user)
      res.json(user)
      // res.send("Sign up successfully!")
    } catch (error) {
      console.log(error)
    }
}

const findUser = async (req, res, next) => {
    try {
      const { user, refreshToken } = await authService.findUser(req.body);
      // console.log(refreshToken)
      // console.log(user)
      if (!user) return res.send({message: "cannot log you in"})
      else{
        await res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          secure: false,
          path: '/',
          sameSite: "strict"
        })
        res.json(user)
      } 
    } catch (error) {
      console.log(error)
    }
}

const requestRefreshToken = async(req,res,next) => {
  const tokenFromCookie = await req.headers['token'].split(" ")[1];
  // console.log(tokenFromCookie)
  // res.send({})
  if (tokenFromCookie) {
    await jwt.verify(tokenFromCookie, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) console.log(err) 
      else {
        const newAccessToken = tokenService.generateToken("accessToken", user)
        const newRefreshToken = tokenService.generateToken("refreshToken", user)
        res.cookie("refreshToken", newRefreshToken, {
          httpOnly: true,
          secure: false,
          path: '/',
          sameSite: "strict"
        })
        res.json({accessToken: newAccessToken, refreshToken: newRefreshToken})
        // res.send({message: "Your new access token: " + `${newAccessToken}`})
      }
    })
  } else {
    res.send({message: "You are not logged in"})
  }
}

module.exports = {
    createUser,
    findUser,
    requestRefreshToken
}