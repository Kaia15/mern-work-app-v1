import React, { useContext, useEffect, useState } from "react";
import RenderReminder from "./reminders/reminder";
import { AuthContext } from "../../context/context";
import Sound from './alarm.mp3'

const Reminder = () => {
    const {alarm, setAlarm} = useContext(AuthContext)
    const {startAlarm, setStartAlarm} = useContext(AuthContext)
    const [hourDigital, setHourDigital] = useState("")
    const [minuteDigital, setMinuteDigital] = useState("")
    const [secondDigital, setSecondDigital] = useState("")
    const {isValid, setIsValid} = useContext(AuthContext)

    const turnOnAlarm = new Audio(Sound)

    useEffect(() => {
        const validToken = localStorage.getItem('validToken');
        if (validToken !== null) {
        const parseToken = JSON.parse(validToken);
        setIsValid(parseToken['valid'])
    } else {
        setIsValid(false)
    }}, [])

    useEffect(() => {
        setInterval(() => {
            const d = new Date()
            const HH = d.getHours()
            const MM = d.getMinutes()
            const SS = d.getSeconds()
            // console.log(`${MM}`)
            if (HH < 10) setHourDigital(`${HH}`) 
            else setHourDigital(`${HH}`)
            if (MM < 10) setMinuteDigital(`0${MM}`)
            else setMinuteDigital(`${MM}`)
            if (SS < 10) setSecondDigital(`0${SS}`)
            else setSecondDigital(`${SS}`)
        }, 1000)
    }, [])

    
    useEffect(() => {
        // console.log(alarm)
        // console.log(`${hourDigital} : ${minuteDigital} : ${secondDigital}`)
        if (alarm.indexOf(`${hourDigital} : ${minuteDigital} : ${secondDigital}`) !== -1)
            // alert("Wake up")
        {
            localStorage.setItem('alarm', JSON.stringify(alarm.filter((a) => {return a !== `${hourDigital} : ${minuteDigital} : ${secondDigital}`})))
            console.log('wake up')
            setStartAlarm(true)
        }   
            
    }, [alarm, hourDigital, minuteDigital, secondDigital])

    useEffect(() => {
        {startAlarm && turnOnAlarm.play()}
        setTimeout(() => {
            setStartAlarm(false)
        }, 1000)
        console.log(startAlarm)
    }, [startAlarm])
    
    useEffect(() => {
        if (!startAlarm) turnOnAlarm.pause()
    }, [startAlarm])

    const onSubmit = (values, actions) => {
        let hr = `${values.hour}`;
        let min = `${values.min}`;
        let sec = `${values.second}`;
        if (values.hour < 10) hr = `0${values.hour}`
        if (values.min < 10) min = `0${values.min}`
        if (values.second < 10) sec = `0${values.second}`
        setAlarm(prev => {return [...prev, `${hr} : ${min} : ${sec}`]})
        
        actions.resetForm()
    }

    const pauseAlarm = () => {
        setStartAlarm(false)
        console.log("alarm noti ends")
    }   

    return (
        <RenderReminder onSubmit = {onSubmit} 
        hourDigital = {hourDigital}
        minuteDigital = {minuteDigital}
        secondDigital = {secondDigital}
        pauseAlarm = {pauseAlarm}
        alarm = {alarm}
        // startAlarm = {startAlarm}
        isValid = {isValid}
        // setStartAlarm = {setStartAlarm}
        />
    )
}

export default Reminder