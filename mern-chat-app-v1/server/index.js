const express = require('express')
const bodyParser = require('body-parser')
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const cookies = require('cookie-parser')
const path = require('path')
const port = 8000

const io = require('socket.io')(8900, {
    cors: {
        origin: "http://localhost:3000",
    }
    
})

// use socket 
let users = []
const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) &&
    users.push({userId, socketId})
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId)
}

const getUser = (userId) => {
    return users.find((user) => user.userId === userId) || {}
}

io.on("connection", socket => {
    // console.log("a user connected")
    // io.emit('welcome', 'hello this is ws server')
    socket.on('addUser', userId => {
        addUser(userId, socket.id)
        io.emit('getUsers', users)
    })

    socket.on("sendMessage", ({ senderId, receiverId, text}) => {
        console.log(receiverId)
        const receiver = getUser(receiverId) 
        console.log(receiver)
        if (receiver !== {})
        {
            // console.log(user['socketId'])
            io.to(receiver['socketId']).emit('getMessage', {
                senderId,
                text,
                receiverId
            })
        }
        
    })

    socket.on('disconnect', () => {
        // console.log('a user disconnected!')
        removeUser(socket.id)
        io.emit('getUsers', users)
    })
})

dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());

app.use(
   cors({
     origin: true,
      optionsSuccessStatus: 200,
      credentials: true,
    })
)
// cors('*'));
app.options(
    '*',
    cors({
      origin: true,
      optionsSuccessStatus: 200,
      credentials: true,
    })
);

const routes = require('./src/routes/mainRouter')
app.use(routes)

/*if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.get('*', (req,res) => {
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}*/
app.use(express.static(path.join(__dirname, "/client/build")))
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/client/build", "index.html'))
})

mongoose
    .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(port, () => {
            console.log(`example app: ${port}`)
        })
    })
    .catch(err => console.log(err))
