import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { CardContent, Divider } from '@mui/material'
import {Form, useFormik} from 'formik'
import { editSchema } from '../../../auth/yubschema/yup'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import signupcss from './signup.module.css'
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
const check = (values, errors) => {
    if (values.name !== "" && values.username !== "")
    {
        // console.log (typeof errors.name == 'undefined' && typeof errors.username == 'undefined' && typeof errors.email == 'undefined' && 
        // typeof errors.password == 'undefined')
        return (typeof errors.name == 'undefined' && typeof errors.username == 'undefined')
    } else {
        return false 
    }
}

const RenderEdit = ({onSubmit}) => {
    const [edit, setEdit] = useState(false)
    const { values, errors, onChange, handleChange, handleSubmit, onBlur, handleBlur } = useFormik({
        initialValues: {
            username: "",
            name: "",
            friends: [],
            typeLogin: "Email",
            friends: []
        },
        validationSchema: editSchema,
        onSubmit: onSubmit
    })
    // console.log(errors)
    useEffect(() => {
        // console.log(check(values, errors))
        setEdit(check(values, errors))
    }, [errors, values])

    // console.log(edit)
    console.log(values)

    return (
        <div>
        <Card style = {{margin: "10vh 32vw 0 32vw"}}>
            
            <h4 style = {{margin: '12px 6vw'}}> Update information </h4>
            <Divider fullWidth style = {{margin: '12px 6vw'}}/>
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
                <Button
                type = "submit"
                size = "large"
                style = {{margin: "0px 5.4vw"}}
                disabled = {!edit}
                variant = 'outlined'
                >
                    EDIT
                </Button>
            </form>
            <div style = {{display:'flex', flexDirection: 'row', margin: '0px 4.8vw'}}>
            <Link to = '/dashboard' style = {{textDecoration: 'none'}}>
            <Button
            size = "large"
            variant = 'contained'
            style = {{margin: "10px"}}>
                dashboard
            </Button>
            </Link>
            <Link to = '/profile' style = {{textDecoration: 'none'}}>
            <Button
            size = "large"
            variant = 'contained'
            style = {{margin: "10px"}}>
                back to profile
            </Button>
            </Link>
            </div>
            </CardContent >
        </Card>
        <div>
            
        </div>
        </div>
    )
}

export default RenderEdit