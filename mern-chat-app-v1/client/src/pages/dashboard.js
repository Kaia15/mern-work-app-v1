import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { AuthContext } from '../context/context'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { Card, CardContent, CardActionArea, CardActions, CardMedia, Box, Divider, CircularProgress } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { checkAuth } from '../auth/checkAuth'
import { remindImg, friendImg, taskImg, musicImg, timerImg, messImg } from '../assets/img'
// import { axios } from '../config'
// import LogoutIcon from '@mui/icons-material/LogoutIcon';


const getUser = async (userId, user) => {
    const res = await axios.get(`http://localhost:8000/user/${userId}`, {
        headers: { token: `Bearer ${user.accessToken}` },
    })
    const data = await res.data
    return data
}

const getAllTasks = async (user) => {
    console.log(user['accessToken'])
    const res = await axios.get('http://localhost:8000/task/',
        {
            headers: { token: `Bearer ${user.accessToken}` }
        })
    const data = await res.data
    // console.log(data)
    return data
}

const Dashboard = () => {
    const { user, setUser } = useContext(AuthContext)
    // const { validToken, setValidToken } = useContext(AuthContext)
    // const profile = JSON.parse(localStorage.getItem('profile'))
    const { profile, setProfile } = useContext(AuthContext)
    const { isValid, setIsValid } = useContext(AuthContext)
    const settings = ['profile', 'service']
    // localStorage.setItem('editmode', JSON.stringify({edit: false}))

    // let isValid = false;
    // console.log(validToken)

    const waterImg = 'https://i.pinimg.com/564x/3a/35/f3/3a35f3fc5b36ca9224982a5288fe2d2e.jpg'
    const wImg = `url(${waterImg})`

    const contents = [['active', "See your friends who's active"], ['message', "inbox with friends in your list"], 
                        ['task', "fill today's tasks"], ['music', "listen to favorite music"], 
                        ["reminders", "add your reminders and take care your health"], ['timer', 'Set timer to focus/ Take break']]
    
    const urls = [`url(${friendImg})`, `url(${messImg})`, `url(${taskImg})`, `url(${musicImg})`, `url(${remindImg})`, `url(${timerImg})` ]

    useEffect(() => {
        checkAuth({setIsValid})
    }, [])

    const img = 'https://i.pinimg.com/736x/57/88/a6/5788a66bb83cbc16a653bfd005ef42e5.jpg'
    const imgUrl = `url(${img})`

    /*useEffect(() => {
        if (isValid) {
            const user = localStorage.getItem('user');
            const parseUser =  JSON.parse(user)
            const currentDate = new Date()
            if (parseUser !== null)
            {
                const decodedToken = jwt_decode(parseUser.accessToken)
                const expired = (decodedToken.exp * 1000 < currentDate.getTime())
                // console.log(expired)
                if (expired) {
                    setIsValid(false)
                    localStorage.setItem('user', JSON.stringify(null))
                    localStorage.setItem('validToken', JSON.stringify({valid: false}))
                    // JSON.parse(localStorage.getItem('validToken'))['valid'];
                    // localStorage.setItem('profile', JSON.stringify(null))
                }
            } else {
                setIsValid(false)
            }
        } else {
            localStorage.setItem('user', JSON.stringify(null))
            localStorage.setItem('validToken', JSON.stringify({valid: false}))
        }
    }, [isValid])
    */
    
    useEffect(() => {
        if (isValid) {
            const a = localStorage.getItem('user')
            const parseUser = JSON.parse(a)
            console.log(parseUser)
            setUser(parseUser)
            if (parseUser !== null) {
                const pr = getUser(parseUser['id'], parseUser)
                pr
                    .then(res => {
                        // console.log(res)
                        const {password, ...rest} = res
                        localStorage.setItem('profile', JSON.stringify(rest))
                        setProfile(rest)                 
                    })
                    .catch(err => console.log(err))
            }
            else {
                // setProfile(null)
                localStorage.setItem('profile', JSON.stringify(null))
            }
        } else {
            // setProfile(null)
            localStorage.setItem('profile', JSON.stringify(null))
        }

    }, [isValid])

    /*useEffect(() => 
    {   if (isValid)
        {
                if (user !== null)
                {
                    const allTasks = getAllTasks(user)
                    
                        allTasks
                        .then(res => {
                            // console.log(res)
                            localStorage.setItem('tasks', JSON.stringify(res))
                        })
                        .catch(err => console.log(err))
                } else {
                    localStorage.setItem('tasks', JSON.stringify([]))
                }
        } else {
            localStorage.setItem('tasks', JSON.stringify([]))
        }
    }, [isValid])*/
    // console.log(profile)

    /*useEffect(() => async() => {
        const user = localStorage.getItem('user')
        const parseUser = JSON.parse(user)
        // console.log(parseUser)
        if (parseUser !== null)
        {
            console.log(parseUser)
            const res = await axios.get(`/user/${parseUser.id}`, {
                headers: {token: `Bearer ${user.accessToken}`},
            })
                const data = await res.data;
                console.log(data)
                const userPreview = { username: data.username, name: data.name, email: data.email, friendsList: data.friends }
                localStorage.setItem('profile', JSON.stringify(userPreview);
        } else {
            localStorage.setItem('profile', JSON.stringify(null)
        }
    }, [isValid])

    console.log(profile)
    // console.log(typeof isValid)
    */

    // console.log(profile)
    
    console.log(isValid)

    return (
        <div>
            {isValid ? (
            <div>
                {user ? 
                (<div style = {{display: "flex", flexDirection: "row", height: "100vh"}}>
                    <div style = {{flex: "2", backgroundColor: 'white'}}>
                        <div style = {{height: '16vh', display: "flex", flexDirection: "row"}}>
                        <PersonIcon fontSize = 'large' style = {{color: "black", margin: "36px 10px 36px 6vw"}}/>
                        <Link style = {{textDecoration: 'none'}} to = '/profile'>
                        <Typography style = {{margin: "40px 4px"}}>
                            @{user['name'].toUpperCase()}
                        </Typography>
                        </Link>
                        </div>
                        <div style = {{height: "64vh", display: "flex", flexDirection: "column"}}>
                            <Divider fullWidth />
                            {settings.length > 0 && settings.map((cont,id) => {
                                
                                // let bgColor;
                                // let style;
                                let link = `/${cont}`
                                // let textcolor = (colorActive == id) ? 'red': 'black'
                                return (
                                    <div>
                                    <Link style = {{textDecoration: 'none'}} to = {link}>
                                    <Button disabled = {cont === 'settings' || cont === 'service'} fontSize = 'large' fullWidth>
                                        <p style = {{color: 'black'}}> {cont} </p>
                                    </Button>
                                    </Link>
                                    <Divider fullWidth />
                                    </div>
                                )
                            })}
                            <Link style = {{textDecoration: 'none'}} to = '/'>
                            <Button fontSize = 'large' fullWidth>
                            <p style = {{color: 'black'}}> <ExitToAppIcon /></p>
                            </Button>
                            </Link>
                            <Divider fullWidth />
                        </div>
                        <div style = {{height: "20vh"}}>
                        </div>
                    </div>
                    <div style = {{flex: "8", backgroundColor: "#EBECF0"}}>
                        <div style={{height: "12vh"}}>
                        <div>

                        </div>
                        <h2 style = {{color: "#192841", padding: "40px 112px"}}> Hello, {user['name']}</h2>
                        </div>
                        
                        
                        <div style = {{display: "grid", gridTemplateColumns: "auto auto auto", gridColumnGap: "20px", color: "black", height: "81vh", margin: "0px 6vw"}}>
                            {contents.length > 0 && contents.map((cont,id) => {
                                console.log(imgUrl)
                                const link = `/${cont[0]}`
                                return (
                                    <Card sx={{ maxWidth: 270, margin: "12px 0px" }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        style = {{backgroundImage: urls[id], margin: "32px 0px 4px 0px"}}
                                    />
                                    
                                        <Typography gutterBottom variant="h5" component="div" style = {{margin: '0px 18px'}}>
                                        {cont[0]}
                                        </Typography>
                                    
                                    <CardActions>
                                        <Link style = {{textDecoration: 'none'}} to = {link}>
                                        <Button size="small" variant = 'outlined' style = {{margin: "0px 10px"}} disabled = {cont[0] === 'active' || cont[0] === 'music'}> Open board </Button>
                                        </Link>
                                    </CardActions>
                                    </Card>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>)
                : 
                (<div>
                    <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                    </Box>
                </div>)}
            </div>
            )
            :
            (
                    <div style={{ display: "inline-block", color: "black" }}>
                        <p style={{ color: "black", margin: "30vh 0 0 40vw" }}> Your time is expired, please login again </p>
                        <Link to='/login' style={{textDecoration: 'none'}}>
                            <Button
                                variant = 'contained'
                                style={{ margin: "18px 40vw"}}
                            >
                                Login
                            </Button>
                        </Link>
                    </div>
                )
            }
        </div>


    )
}

export default Dashboard