const userService = require('../../services/user.service')

/*let TESTING_USERS = [
  { id: '1', name: "tran", email: "baotranongtran@gmail.com"},
  { id: '2', name : "chris", email: "chris_c1@denison.edu"},
  { id: '3', name: 'duck', email: 'ducky_d1@denison.edu'}
]*/

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers()
    res.send(users)
  } catch (error) {
    console.log(error)
  }
}

const getUser = async (req, res, next) => {
    try {
        // console.log(req.params.id)
        const user = await userService.getUser(req.params.id);
        // console.log(user)
        res.send(user)
        // console.log(TESTING_USERS.length)
    } catch(error) {
        console.log(error)
    }
  };


const editUser = async (req, res, next) => {
  try {
    // console.log(req.params.id)
    // console.log(req.body)
    const user = await userService.editUser(req.params.id, req.body);
    res.send(user)
  } catch(err) {
    res.json(err)
  }
}

const getReview = async (req, res, next) => {
  try {
    // console.log(req.params.id)
    const review = await userService.getReview(req.params.id);
    // console.log(review)
    res.send(review)
    // console.log(TESTING_USERS.length)
} catch(error) {
    console.log(error)
}
}

/*const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    await user.save()
  } catch (error) {
    console.log(error)
  }
}

const findUser = async (req, res, next) => {
  try {
    const user = await userService.findUser(req.body);
    // console.log(user)
    if (!user) return res.send({message: "cannot log you in"})
    else{
      console.log(user)
      return res.send({mesage: "Login successfully"})
    } 
  } catch (error) {
    console.log(error)
  }
}*/
  module.exports = {
    getUsers,
    getUser,
    editUser,
    getReview
    // createUser,
    // findUser
  }