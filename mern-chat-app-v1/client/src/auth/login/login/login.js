import React, { useState, useEffect, useContext } from 'react'
import { useFormik } from 'formik'
// import { useDispatch } from 'react-redux'
import { loginSchema } from '../../yubschema/yup'
import { AuthContext } from '../../../context/context'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
// import jwt_decode from 'jwt-decode'

const check = (values, errors) => {
    if (
        values.email !== "" && values.password !== "")
    {
        console.log (typeof errors.name == 'undefined' && typeof errors.username == 'undefined' && typeof errors.email == 'undefined' && 
        typeof errors.password == 'undefined')
        return (typeof errors.email == 'undefined' && typeof errors.password == 'undefined')
    } else {
        return false 
    }
}

const RenderLogin = ( { user, onSubmit, view, edit}) => {
    // const { profile, setProfile } = useContext(AuthContext)
    // const { validToken, setValidToken } = useContext(AuthContext)
    const {isValid, setIsValid} = useContext(AuthContext)
    const { values, actions, errors, onChange, handleChange, handleSubmit}  = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: onSubmit
    })
    const [submit, setSubmit] = useState(false)
    // console.log(user)
    // const { isLoggingIn, setIsLoggingIn } = useContext(AuthContext)
    /*useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('userData'));
        // console.log(new Date(stored.expiredDate) > new Date())
        if (stored && 
            stored.token  && 
            new Date(stored.expiredDate) > new Date()
        ) {
            login(stored.userId, stored.token, stored.expiredDate);
        } else {
            localStorage.removeItem("userID")
            // resetNewToken()
            
        }
    }, [login, resetNewToken])
    */

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user === null) {
            setIsValid(false)
        } else {
            setIsValid(JSON.parse(localStorage.getItem('validToken')))
        }
    }, [])
    
    useEffect(() => {
        // console.log(check(values, errors))
        setSubmit(check(values, errors))
    }, [errors, values])

    

    
        
    // console.log(values)

    return (
        <div>
        {(!isValid) ? (
        <Card style = {{margin: "24vh 36vw"}}>
        <CardHeader>

        </CardHeader>
        <CardContent>
        <form onSubmit={handleSubmit}>
        <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    
                }} 
                style = {{marginLeft: "78px"}}
                >
                    <TextField 
                    label = "email"
                    type = "text"
                    id = "email"
                    value = {values.email}
                    onChange = {handleChange}
                    />
                </Box>
                {(errors.email && values.email !== "") && (<p style = {{marginLeft: "78px", color: "red"}}> {errors.email}</p>)}
                
                <br />
                <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                }}
                style = {{marginLeft: "78px"}}
                >
                    <TextField 
                    label = "password"
                    type = "password"
                    id = "password"
                    value = {values.password}
                    onChange = {handleChange}
                    />
                </Box>
                {(errors.password && values.password !== "") && 
                (<p style = {{marginLeft: "78px", color: "red"}}>
                password must be exactly 8 characters, 
                including 0-9 digits, uppercase letters, and lowercase letters</p>)}
                <Button
                type = "submit"
                size = "large"
                style = {{margin: "12px 78px"}}
                disabled = {!submit}
                variant = 'outlined'
                >
                    Submit
                </Button>
                
                
        </form>
        <div style = {{display: "flex", flexDirection: "row"}}>
            <p style = {{margin: "12px 0px 12px 84px", color: "black"}}> not a member yet </p>
            <Link to = '/signup' style = {{textDecoration: 'none'}}>
            <Button
            size = "normal"
            variant = "contained"
            style = {{margin: "8px", color: "white"}}
            >
                SIGNUP
            </Button>
            </Link>
            
        </div>
            
        </CardContent>
        
        </Card>) : 
        (<div>
            <Card style = {{margin: "24vh 36vw"}}>
                <div style = {{margin: "12px 102px", display: "inline-block"}}>
                
                <Typography variant = 'h6'>
                <CheckCircleOutlineSharpIcon style = {{margin: '-4px 4px'}}/> Login success
                </Typography>
                </div>
                
                <Link to = '/dashboard' style = {{textDecoration: 'none'}}>
                <Button size = "normal" style = {{margin: "12px 102px"}} variant = 'contained'> Return to dashboard </Button>
                </Link>
                
            </Card>
        </div>)
        }
        </div>
        
        
    )
    
}

export default RenderLogin 