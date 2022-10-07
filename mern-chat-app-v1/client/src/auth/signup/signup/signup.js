import React, { useState, useEffect, useContext } from 'react'
import {useFormik} from 'formik'
import { userSchema } from '../../yubschema/yup'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import signupcss from './signup.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { SnackbarProvider, useSnackbar } from 'notistack';



const check = (values, errors) => {
    if (values.name !== "" && values.username !== "" && 
        values.email !== "" && values.password !== "")
    {
        console.log (typeof errors.name == 'undefined' && typeof errors.username == 'undefined' && typeof errors.email == 'undefined' && 
        typeof errors.password == 'undefined')
        return (typeof errors.name == 'undefined' && typeof errors.username == 'undefined' && typeof errors.email == 'undefined' && 
        typeof errors.password == 'undefined')
    } else {
        return false 
    }
}

const checkError = (type, values, errors) => {
    if (values[type] === "")
        return false
    else {
        if (typeof errors[type] !== "undefined")
            return false
        else
            return true
    }
}


const RenderSignUp = ({onSubmit}) => {
    const [submit, setSubmit] = useState(false)
    // const { enqueueSnackbar } = useSnackbar();
    const {values, errors, handleSubmit, handleChange, onChange, onBlur, isSubmitting } = 
    useFormik({
        initialValues: {
            username: "",
            name: "",
            email: "",
            password: "",
            typeLogin: "Email",
            friends: []
        },
        validationSchema: userSchema,
        onSubmit
    })
    // console.log(values)


    useEffect(() => {
        // console.log(check(values, errors))
        setSubmit(check(values, errors))
    }, [errors, values])

    // const variant = 'warning'

    /*useEffect(() => {
        if (!checkError("username", values, errors)) {
            enqueueSnackbar(errors.username, {variant})
        }
        if (!checkError("name", values, errors)) {
            enqueueSnackbar(errors.name, {variant})
        }
        if (!checkError("email", values, errors)) {
            enqueueSnackbar(errors.email, {variant})
        }
        if (!checkError("password", values, errors)) {
            enqueueSnackbar(errors.password, {variant})
        }
    }, [errors, values])
    */
    
    console.log(errors.password)

    return (
    <div>
        <div className={signupcss.container}>
        <Card>
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
                    label = "username"
                    type = "text"
                    id = "username"
                    value = {values.username}
                    onChange = {handleChange}
                    />
                </Box>
                {(errors.username && values.username !== "") && (<p style = {{marginLeft: "78px", color: "red"}}> {errors.username}</p>)}
                
                <br />
                <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                }}
                style = {{marginLeft: "78px"}}
                >
                    <TextField 
                    label = "name"
                    type = "text"
                    id = "name"
                    value = {values.name}
                    onChange = {handleChange}
                    
                    />
                </Box>
                {(errors.name && values.name !== "") && (<p style = {{marginLeft: "78px", color: "red"}}> {errors.name}</p>)}
                <br />
                <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                }}
                style = {{marginLeft: "78px"}}
                >
                    <TextField
                    label = "email"
                    type = "email"
                    id = "email"
                    value = {values.email}
                    onChange = {handleChange}
                    />
                </Box>
                {(errors.email && values.email !== "") && (<p style = {{marginLeft: "78px", color: "red"}}> {errors.email} </p>)}
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
                 including 0-9 digits, uppercase letters, and lowercase letters </p>)}
                <br />
                <Button
                type = "submit"
                size = "large"
                style = {{margin: "0px 150px"}}
                disabled = {!submit}
                variant = 'outlined'
                >
                    Submit
                </Button>
            </form>
            <div style = {{display: "flex", flexDirection: "row"}}>
            <p style = {{margin: "12px 0px 16px 64px", color: "black"}}> already in our community </p>
            <Link to = '/login' style = {{textDecoration: 'none'}}>
            <Button
            size = "normal"
            variant = "contained"
            style = {{margin: "8px", color: "white"}}
            >
                LOGIN
            </Button>
            </Link>
            
            </div>
            
            </CardContent>
        </Card>
            
    </div>
    
    </div>
    
    )
}

export default RenderSignUp