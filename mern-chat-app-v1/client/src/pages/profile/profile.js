import React, { useContext, useReducer, useEffect, useState } from 'react'
import { AuthContext } from '../../context/context'
import {Button, Card, CardContent, Typography, Divider, Box, List, ListItem, ListItemText, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { checkAuth } from '../../auth/checkAuth';

const settings = ['details', 'profile', 'dashboard']

const Profile = () => {
    // const { user, setUser } = useContext(AuthContext)
    const { profile, setProfile } = useContext(AuthContext)
    const { isValid, setIsValid } = useContext(AuthContext)

    const validToken = localStorage.getItem('validToken');
    
    useEffect(() => {
        const m = JSON.parse(validToken)['valid']
        setIsValid(m)
        if (isValid || m) {
            setProfile(JSON.parse(localStorage.getItem('profile')))
        }
    }, [])
    
    return (
        <div>
        {isValid ? 
        (
        <div style = {{display: "flex", flexDirection: "column", height: "100vh"}}>
        { profile ? 
        (
        <div>
         <div style={{flex: "1"}}>
            <Typography gutterBottom variant="h4" component="div" style = {{margin: "24px 12vw"}}>
                Settings
            </Typography>
            <Divider variant="middle" style = {{margin: "3vh 12vw"}}/>
        </div>
        <div style = {{flex: "9", display: "flex", flexDirection: "row"}}>
            
            <div style = {{width: "20vw"}}>
            {settings.map((set,id) => {
                const link = `/${set}`
                return (
                    <Link style = {{textDecoration: 'none'}} to = {link}>
                        <Button key = {id} style = {{margin: "12px 12vw", color: 'black'}}>
                        {set}
                        </Button>
                    </Link>
                    
                )
            })}
            <Link style = {{textDecoration: 'none'}} to = '/'>
                <Button style = {{margin: "12px 12vw"}}>
                <p style = {{color: 'black'}}> <ExitToAppIcon /></p>
                </Button>
            </Link>
            </div>
            <div style = {{width: "80vw"}}>
            <div style = {{height: "20vh"}}>
            <Box sx={{
                    width: '75%',
                    height: '100%',
                    backgroundColor: "#DDB8A6"
            }} style = {{margin: "0px 4vw", borderRadius: "8px"}}/>
            </div>
            <div style = {{display: "flex", flexDirection: "row", height: "60vh"}}>
            <div style = {{flex: "2"}}>
            <Typography gutterBottom variant="h5" component="div" style = {{margin: "24px 4vw"}}>
            Profile
            </Typography>
            <Avatar sx={{ bgcolor: deepOrange[400], margin: "6px 6vw", width: "80px", height: "80px" }}> {profile['name'][0].toUpperCase()} </Avatar>
            <Link style = {{textDecoration: 'none'}} to = '/editprofile'>
            <Button style = {{margin: "6px 4.5vw", color: 'black'}} variant = "outlined">
                Edit profile
            </Button>
            </Link>
            
            </div>
            <div style = {{flex: "6", display: 'flex', flexDirection: "row"}}>
            
                <List
                sx={{
                    width: '100%',
                    maxWidth: 540,
                    bgcolor: 'background.paper',
                    margin: "20px 0px 0px 0px"
                }}
                >
                <ListItem>
                    <ListItemText primary= "Name" secondary={profile['name']} />
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary= "Email" secondary={profile['email']} />
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <Divider/>
                </List>
                
            </div>

            </div>
            </div>
        </div>
        </div>) : (<div>
        <Box sx={{ display: 'flex' }}>
        <CircularProgress />
        </Box>
        </div>)}
        </div>
        ) : (
        <div style = {{margin: '20px'}}>
            <p style = {{margin: "0px 10px"}}> Your time is expired </p>
            <Link to = '/login' style = {{textDecoration: 'none'}}>
            <Button variant = "contained" style = {{margin: '10px'}}>
                return to login
            </Button>
            </Link>
        </div>
        )}
        </div>
    )
}

export default Profile 