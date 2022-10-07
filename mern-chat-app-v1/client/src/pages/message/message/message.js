import React, { useEffect, useState, useRef, useContext } from 'react'
import {
    Button, Box, Card, CardContent, CardHeader, ToggleButtonGroup,
    ToggleButton, Divider, TextField, Dialog, DialogActions, DialogTitle, DialogContent, Radio, FormControlLabel, RadioGroup
} from '@mui/material'
import Conversation from '../../../components/conversation';
import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import { io } from 'socket.io-client'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../../../context/context';
import SmsIcon from '@mui/icons-material/Sms';
import Add from '@mui/icons-material/Add';
// import { axios } from '../../../config';

const getMessage = async (id) => {
    const message = await axios.get(`http://localhost:8000/message/${id}`)
    const data = await message.data
    return data
}

const createMessage = async (body) => {
    const message = await axios.post(`http://localhost:8000/message/create`, { ...body })
    const data = await message.data
    return data
}

const RenderMessage = ({ handleNewChat, users }) => {
    const { isValid, setIsValid } = useContext(AuthContext)
    const { currentChat, setCurrentChat } = useContext(AuthContext)
    const [currentMessage, setCurrentMessage] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const socket = useRef()
    const [arrivalMessage, setArrivalMessage] = useState("")
    const scrollRef = useRef()
    const [chatColor, setChatColor] = useState("white")
    const { allConversations, setAllConversations } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const [newMemberId, setNewMemberId] = useState("")
    // const [newMemberName, setNewMemberName] = useState("")

    let userId;
    let username;
    // console.log(chats)
    const user = JSON.parse(localStorage.getItem('user')) || null
    if (user !== null) {
        userId = user['id']
        username = user['username']
    }

    console.log(userId)


    const newContacts = users.filter(cont => {
        let ids = [];
        allConversations.map(m => { ids.push(...m['members']) })
        return ids.indexOf(cont['_id']) === -1
    })

    const contactIds = newContacts.map(cont => cont['_id'])
    console.log(contactIds)

    const contactNames = newContacts.map(cont => cont['username'])

    // console.log(a)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        socket.current = io('ws://localhost:8900')
        socket.current.on("getMessage", data => {
            // console.log(data)
            setArrivalMessage({
                sender: data.senderId,
                receiver: data.receiverId,
                text: data.text,
            })
        })
    }, [])

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
            setCurrentMessage(prev => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit("addUser", userId)
        socket.current.on('getUsers', users => console.log(users))
    }, [socket])


    useEffect(() => {
        if (currentChat !== null) {
            // console.log(currentChat['_id'])
            const messages = getMessage(currentChat['_id'])
            messages.then(res => {
                // console.log(res)
                setCurrentMessage(res)
            })
                .catch(err => console.log(err))
        }

    }, [currentChat])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [currentMessage])

    const boards = ['dashboard', 'task', 'reminders', 'timer']

    const addMessage = async () => {
        if (currentChat) {
            if (newMessage !== '') {
                const mess = { conversationId: currentChat['_id'], sender: userId, receiver: currentChat['members'].find(mem => mem !== userId), text: newMessage }
                // console.log(mess)
                // console.log(socket)
                socket.current.emit("sendMessage", {
                    senderId: userId,
                    receiverId: mess['receiver'],
                    // conversationId: currentChat['_id'],
                    text: newMessage
                })
                setCurrentMessage(prev => [...prev, mess])
                createMessage(mess)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                setNewMessage("")
            }
        }
    }


    // console.log(currentChat)
    // console.log(newMessage)
    // console.log(currentMessage)
    // console.log(a)
    // console.log(userId)
    // console.log(chat_responders)
    // console.log(arrivalMessage)
    /*let id2
    if (users !== null) id2 = users[24]['_id']*/
    console.log(newMemberId)

    return (
        <div>
            {isValid ?
                (
                    <div>
                        <div style={{ height: '8vh', margin: '0vh 12vw', display: 'flex', flexDirection: 'row' }}>
                            <div style={{ flex: '8', display: 'flex', flexDirection: 'row' }}>
                                <Divider orientation='vertical' fullWidth/>
                                {boards.map(board => {
                                    const link = `${board}`
                                    return (
                                        <div style = {{display: 'flex', flexDirection: 'row'}}>
                                        <Link to={link} style={{ textDecoration: 'none'}}>
                                            <h4 style = {{margin: '10px 17px' }}>
                                                {board}
                                            </h4>
                                            
                                        </Link>
                                        <Divider orientation = 'vertical' fullWidth />
                                        </div>
                                       
                                    )
                                })}


                            </div>
                            <div style={{ flex: '2', display: 'flex', flexDirection: 'row' }}>
                                <Link to='/profile' style={{ textDecoration: 'none', margin: '4px 20px' }}>
                                    <Conversation id={userId} />
                                </Link>
                            </div>

                        </div>
                        <Divider fullWidth />
                        <Card style={{ display: "flex", flexDirection: "row", height: "88vh", margin: '1.8vh 12vw' }}>
                            <div style={{ flex: "2", display: "flex", flexDirection: "column" }}>
                                <div style={{ display: 'flex', flexDirection: "column", flex: '10' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography variant="h6" style={{ color: "black", margin: "10px 20px" }}> Chats </Typography>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {"new inbox?"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <Typography color={'GrayText'} variant='h7'>
                                                    suggested
                                                </Typography>
                                                <div style={{ height: '200px', overflowY: 'scroll', margin: '16px 0px' }}>
                                                    <RadioGroup>
                                                        {contactNames.map((name, i) => {
                                                            return (
                                                                <FormControlLabel value={contactIds[i]} control={<Radio />} label={name} onChange={(e) => setNewMemberId(e.target.value)} />
                                                            )
                                                        })}
                                                    </RadioGroup>

                                                </div>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose}> Cancel </Button>
                                                <Button onClick={() => {
                                                    handleNewChat(userId, newMemberId)
                                                    setOpen(false)

                                                }} autoFocus>
                                                    create new chat
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                        <Button variant="outlined" onClick={handleClickOpen} size='small' style={{ margin: '10px 4px 10px 7.2vw' }}>
                                            <Add /><SmsIcon />
                                        </Button>
                                    </div>

                                    <TextField
                                        label="search"
                                        id="search"
                                        type='text'
                                        style={{ margin: "0px 12px", borderRadius: '6px' }}
                                        placeholder='Search @/'
                                        size="small"
                                    />
                                    <Divider variant='middle' style={{ margin: "24px 0px 0px 0px" }} />
                                    <div style={{ overflowY: "scroll", height: '72vh', display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                        {(allConversations.length > 0) &&
                                            allConversations.map((b, index) => {
                                                // console.log(b)
                                                const receivers = b['members'].filter(mem => mem !== userId)
                                                // console.log(receivers)
                                                return (
                                                    <Typography onClick={() => {
                                                        setCurrentChat(b)
                                                    }} style={{ margin: "4px 0px", height: "60px", backgroundColor: chatColor }} >
                                                        <Button>
                                                            <Conversation id={receivers} />
                                                        </Button>
                                                    </Typography>
                                                )
                                            })
                                        }
                                    </div>


                                </div>
                            </div>
                            <Divider orientation='vertical' fullWidth />
                            <div style={{ flex: "6" }}>
                                {currentMessage ? (
                                    <div style={{ display: "flex", flexDirection: "column", height: "88vh" }}>
                                        <div style={{ height: "10vh" }}>
                                            <div style={{ margin: "20px", display: 'flex', flexDirection: 'row' }}>
                                                <div style={{ flex: '9' }}>
                                                    {currentChat &&
                                                        <Conversation id={currentChat['members'].filter((m, id) => m !== userId)} />
                                                    }
                                                </div>
                                                <Button style={{ flex: '1' }}>
                                                    <MenuIcon />
                                                </Button>
                                            </div>

                                        </div>
                                        <div style={{ height: "84vh", overflowY: "scroll" }}>
                                            <Divider fullWidth style={{ margin: "1px 0px 0px 0px" }} />
                                            {currentMessage.length > 0 ? (currentMessage.map((mess, id) => {
                                                let style
                                                // console.log(mess)
                                                const { sender, receiver } = mess
                                                if (sender === userId) style = { backgroundColor: "#006AFF", color: "white", margin: "12px 10px 0px 44vw", width: "12vw", minHeight: '32px', borderRadius: "8px" }
                                                else style = { backgroundColor: "#E5E4E2", color: "black", margin: "20px 10px 0px 20px", width: "12vw", minHeight: '32px', borderRadius: "8px" }
                                                return (
                                                    <div ref={scrollRef}>
                                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                            <Typography style={{ ...style }}>
                                                                {mess['text']}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                )
                                            })) :
                                                (<Typography variant='h6' color='primary' style={{ textAlign: 'center' }}>
                                                    Send your first message
                                                </Typography>)}
                                        </div>
                                        <div style={{ height: "10vh", display: "flex", flexDirection: "row" }}>
                                            <TextField fontSize="small"
                                                style={{ margin: "13px 20px", width: "75%", borderRadius: '6px' }}
                                                value={newMessage}
                                                onChange={(e) => { setNewMessage(e.target.value) }}
                                                variant='outlined'
                                                size="small" />
                                            <Button style={{ margin: "12px 8px 22px 12px" }} fontSize="medium" variant='contained' onClick={addMessage} endIcon={<SendIcon />}>
                                                Send
                                            </Button>
                                        </div>
                                    </div>
                                )
                                    : (

                                        <p style={{ color: "gray", fontSize: "36px", textAlign: "center" }}> Open the new conversation </p>
                                    )}

                            </div>
                        </Card>
                    </div>
                ) :
                (
                <div style = {{margin: '20px'}}>

                    <p style = {{margin: "0px 10px"}}> Your time is expired </p>
                    <Link to = '/login' style = {{textDecoration: 'none'}}>
                    <Button variant = "contained" style = {{margin: '10px'}}>
                        return to login
                    </Button>
                    </Link>
                </div>)}
        </div>

    )
}

export default RenderMessage
