import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Form, useFormik } from 'formik'
import { editSchema } from '../../auth/yubschema/yup'
import RenderEdit from './edit/edit'
import { AuthContext } from '../../context/context'

const edit = async (userId, body, user) => {
    const res = await axios.patch(`http://localhost:8000/user/${userId}/edit`, 
        { ...body },
        { headers: { token: `Bearer ${user.accessToken}` }}
    )
    // const data = await res.data;
    return res
}

const Edit = () => {
    // console.log(validToken)
    const { profile, setProfile } = useContext(AuthContext)
    const {user, setUser} = useContext(AuthContext)
    const validToken = localStorage.getItem('validToken');
    const [ changedVals, setChangedVals ] = useState();
    let isValid = false;
    if (validToken !== null)
    {
        const parseToken = JSON.parse(validToken);
        isValid = parseToken['valid'];
    }

    console.log(validToken)

    const onSubmit = (values, actions) => {
        if (isValid) {
            const user = localStorage.getItem('user')
            const parseUser = JSON.parse(user)
            if (parseUser !== null)
            {
                // console.log(parseUser['id'])
                const editprofile = edit(parseUser['id'], {...values}, parseUser)
                editprofile
                .then((res) => {
                    if (res !== null)
                    {   
                        console.log(res.data)
                        const oldUser = JSON.parse(localStorage.getItem('user'))
                        const { id, accessToken, refreshToken, email } = oldUser
                        const response = res.data;
                        // console.log(response.username, response.email)
                        localStorage.setItem('user', JSON.stringify({id: id, accessToken: accessToken, username: response['username'], email: email, name: response['name']}))
                        localStorage.setItem('profile', JSON.stringify({id: id, accessToken: accessToken, username: response['username'], email: email, name: response['name']}))
                        // localStorage.setItem('profile', JSON.stringify(res))
                        setProfile(response)
                        setUser({id: id, accessToken: accessToken, name: response['name'], username: response['username'], email: email})
                        actions.resetForm()
                    }
                    else {
                        setProfile(null)
                        alert("Not modified to edit your profile")
                        actions.resetForm()
                    }
                })
                .catch(err => console.log(err))
                // console.log(parseUser)
            }
        }
    }

    return (
            <RenderEdit onSubmit ={onSubmit} />
    )

}

export default Edit