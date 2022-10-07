import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/context'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, Route } from 'react-router-dom'
import { Typography } from '@mui/material';

const Home = () => {
    const { profile, setProfile }= useContext(AuthContext)
    const { user, setUser } = useContext(AuthContext)
    const {isValid, setIsValid} = useContext(AuthContext)

    const img_add = 'https://i.pinimg.com/564x/3a/39/71/3a39713f60926391de63513d7a693922.jpg'
    const home_url = `url(${img_add})`

    useEffect(() => {
        setIsValid(false)
        localStorage.setItem('validToken', JSON.stringify({valid: false}))
        localStorage.setItem('user', JSON.stringify(null))
    }, [])

    return (
        <div style = {{
        height: "100%",
        width: "100%",
        backgroundSize: 'cover',
        borderRadius: "6px", height: "100vh", display: 'flex', flexDirection: 'row'}}>
        <div style = {{flex: '1'}}>
            <div>
                <Typography variant = 'h3' style  = {{fontWeight: 'bolder', margin: '16vh 8vw 12px 8vw'}}>
                    Simply, work Effectively
                </Typography>
                <Typography variant = 'h7' style = {{color: 'GrayText', margin: '0px 10vw'}}> we're here to be with you</Typography>
            </div>
            <div style = {{display:"flex", flexDirection: "row", padding: "30px 6vw"}}>
                
                <TextField size = "small" width = '75%' style = {{margin: "12px", backgroundColor: "white", borderRadius: "4px"}}
                placeholder = "Search/@universe"/>
                <Link to = '/signup' style = {{textDecoration: 'none'}}>
                <Button variant="outlined" color="secondary" size="large" style = {{color: "black", margin: "12px"}}> SIGNUP </Button>
                </Link>
                <Link to = '/login' style = {{textDecoration: 'none'}}>
                <Button variant="outlined" color="secondary" size="large" style = {{color: "black", margin: "12px"}}> LOGIN </Button>
                </Link>
                
            </div>
            
        </div>
        <div style = {{flex: '1', backgroundImage: home_url, backgroundRepeat: 'no-repeat', margin: '10vh 4vw'}}>

        </div>
        </div>
        
    )
}

export default Home