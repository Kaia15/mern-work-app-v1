import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import RenderSignUp from './signup/signup';
import axios from 'axios';


const SignUp = () => {
    const {isValid, setIsValid} = useContext(AuthContext)
    const {user, setUser} = useContext(AuthContext)
    const onSubmit = async (values, actions) => {
        // console.log(values)
        const res = await axios.post("http://localhost:8000/user/signup", 
            {
                /*username: values.username,
                name: values.name,
                email: values.email,
                password: values.password,*/
                ...values,
                typeLogin: "Email"
            })
        const data = await res.data
        const accessToken = data['accessToken']
        const user = data['_doc']
        console.log(user['_id'])
        setUser({id: user['_id'], email: user['email'], username: user['username'], accessToken: accessToken})
        localStorage.setItem('user', JSON.stringify({id: user['_id'], email: user['email'], username: user['username'], name: user['name'], accessToken: accessToken}))
        localStorage.setItem('validToken', JSON.stringify({valid: true}))

        setIsValid(true)
        // const login = await axios.get("http://localhost:8000/user/login", )
    
        await actions.resetForm()
    }
    // const { isLoggingIn, setIsLoggingIn } = useContext(AuthContext);
    // const isValid = JSON.parse(localStorage.getItem('validToken'))['valid']
    console.log(isValid)
    console.log(JSON.parse(localStorage.getItem('validToken'))['valid'])
    return (
    <div>
        {isValid ? <Redirect to = '/dashboard' />: <RenderSignUp onSubmit={onSubmit}/>}
    </div>
    
    )
}

export default SignUp