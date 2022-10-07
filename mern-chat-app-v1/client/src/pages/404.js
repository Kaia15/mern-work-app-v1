import { Divider, Button, Snackbar, Alert } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    const img404 = 'https://i.pinimg.com/564x/03/5e/0b/035e0ba20275ac5030e067298e7bd285.jpg'
    const img404_url = `url(${img404})`
    const [open, setOpen] = useState(false)

    useEffect(() => {setOpen(true)}, [])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const settings = ['dashboard', 'settings', 'profile', 'service']

    console.log(img404_url)

    return (
        <div style = {{display: 'flex', flexDirection: 'row', height:'100vh'}}>
            <div style = {{flex: '3'}}> 
            <Divider fullWidth />
            {settings.length > 0 && settings.map((cont,id) => {
                let link = `/${cont}`
                                // let textcolor = (colorActive == id) ? 'red': 'black'
                return (
                    <Link style = {{textDecoration: 'none'}} to = {link}>
                    <Button fontSize = 'large'>
                        <p style = {{color: 'black'}}> {cont} </p>
                    </Button>
                    <Divider fullWidth />
                    </Link>
                                    
                )
            })}
            </div>
            <Divider orientation='vertical' fullWidth/>
            <div style = {{flex: '7', margin: '12vh 20vw'}}>
            <div style = {{ backgroundImage: img404_url, width: '100%', height: '100%', backgroundRepeat: 'no-repeat'}}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                Sorry, we did not update this feature, please go back later.
                </Alert>
            </Snackbar>
            </div>
            </div>
            
        </div>
    )
}

export default NotFound
