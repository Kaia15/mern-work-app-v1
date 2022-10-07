const express = require('express')

const router  = express.Router()
const userRoute = require('../controllers/user/user.route')
const taskRoute = require('../controllers/task/task.route')
const conversationRoute = require('../controllers/conversation/conversation.route')
const messageRoute = require('../controllers/message/message.route')

router.use('/user', userRoute);
router.use('/task', taskRoute);
router.use('/conversation', conversationRoute)
router.use('/message', messageRoute)


// .("/frontend endpoints"), then server code frontend/js
module.exports = router;