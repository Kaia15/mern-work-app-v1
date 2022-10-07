import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { useFormik } from 'formik'
import RenderTimer from './timer/timer'

const Timer = () => {
    const [timer, setTimer] = useState({hour: 0, minute: 0, second: 0})

    const onSubmit = (values, actions) => {
        setTimer(values)
        actions.resetForm()
    }
    console.log(timer)
    return (
        <RenderTimer onSubmit = {onSubmit} timer = {timer} />
    )
}

export default Timer