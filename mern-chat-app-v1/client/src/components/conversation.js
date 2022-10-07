import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography, Avatar } from '@mui/material'

const getUser = async (id) => {
    const res = await axios.get(`http://localhost:8000/user/review/${id}`)
    const data = await res.data
    return data
}

const Conversation = ({id}) => {
    const [responder, setResponder] = useState(null)
    let isValid = false;
    // console.log(validToken)
    const validToken = localStorage.getItem('validToken');
    if (validToken !== null)
    {
        const parseToken = JSON.parse(validToken);
        isValid = parseToken['valid'];
    }
    // console.log(id)
    useEffect(() => {
        if (isValid) 
        {
            getUser(id).then(res => {
                // console.log(res)
                // localStorage.setItem('responder', JSON.stringify(res))
                setResponder(res)
            }).catch (err => console.log(err)) 
        }
    }, [isValid, id])

    // console.log(responder)
    
    return (
        <Typography variant="h7" component="div" style = {{margin: "4px"}}>
            {responder !== null && (
                <div style = {{display: "flex", flexDirection: 'row'}}>
                    <Avatar sx={{ bgcolor: '#b5e2ff' }}> {responder['username'][0].toUpperCase()} </Avatar>
                    <p style={{margin: '6px 10px', textAlign: 'center'}}> {responder['username'].toUpperCase()} </p>
                </div>
                )}
        </Typography>
    )
}

export default Conversation