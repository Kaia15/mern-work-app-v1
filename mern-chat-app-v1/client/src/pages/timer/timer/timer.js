import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import {Button, FormControl, TextField, MenuItem, InputLabel, Select, Typography, Box, Divider} from '@mui/material'

const RenderTimer = ({onSubmit, timer}) => {
    const [countdown, setCountDown] = useState(null)
    const [calcDiff, setCalcDiff] = useState(0)
    const [remainingTime, setRemainingTime] = useState({hour : 0, minute: 0, second: 0})
    const [startCount, setStartCount] = useState(false)
    const [timezone, setTimeZone] = useState("")
    const [country, setCountry] = useState("")
    const [globalTime, setGlobalTime] = useState([])

    function rangeTime(start, end) {
        const range = [...Array(end - start + 1).keys()].map(x => x + start);
        return range
    }
    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            hour: 0,
            minute: 0,
            second: 0
        },
        onSubmit
    })

    // console.log(timer)
    // console.log(countdown)

    console.log(remainingTime)
    /*useEffect(() => {
        if (timer !== null) {
            let hr
            let mm
            let ss
            let a = remainingTime
            if (remainingTime['hour'] !== 0 || remainingTime['minute'] !== 0 || remainingTime['second'] !== 0)
            {
                setCountDown(remainingTime)
            } else {
                setRemainingTime(timer)
                setCountDown(timer)
            }
        }
    }, [timer, remainingTime])*/

    
    // console.log(startCount)
    useEffect(() => {
        if (startCount) {
            let diff
            const jsondiff = JSON.parse(localStorage.getItem('diff')) 
            if (jsondiff !== null) diff = jsondiff['diff']
            else diff = new Date(countdown).getTime() - new Date().getTime()
            if (diff > -1)
                setTimeout(() => {
                    setRemainingTime(prev => { return {...prev, hour: Math.floor(diff / (60*60*1000))}})
                    setRemainingTime(prev => { return {...prev, minute: Math.floor(diff / (1000*60) % 60)}})
                    setRemainingTime(prev => { return {...prev, second: Math.floor(diff / (1000) % 60)}})
                    localStorage.setItem('diff', JSON.stringify({'diff': diff - 1000}))
                }, 1000)
            // console.log(diff)
            else {
                setStartCount(false)
            }
        }
    }, [countdown, remainingTime, startCount])
    // console.log(remainingTime)
    // console.log(globalTime)
    
   useEffect(() => {
    if (timer !== null) {
        setRemainingTime(timer)
        localStorage.setItem('diff', JSON.stringify({diff: timer.hour*60*60*1000 + timer.minute*60*1000 + timer.second*1000}))
    }
   }, [timer])
    
   const h = (remainingTime['hour'] < 10 ? `0${remainingTime['hour']}` : `${remainingTime['hour']}`)
   const m = (remainingTime['minute'] < 10 ? `0${remainingTime['minute']}` : `${remainingTime['minute']}`)
   const s = (remainingTime['second'] < 10 ? `0${remainingTime['second']}` : `${remainingTime['second']}`)

   const boards = ['dashboard', 'task', 'reminders', 'profile']
    
    return (
        <div style = {{ margin: "0vh 16vw"}}>
            <div style = {{height: '12vh', display: 'flex', flexDirection: 'row'}}>
            {boards.map(board => {
                const link = `${board}`
                return (
                    <Link to = {link} style = {{textDecoration: 'none', margin: '-2px 20px'}}>
                    <h4>
                    {board}
                    </h4>
                </Link>
                )
            })}
            </div>
            <Divider fullWidth />
            <Box sx = {{width: '70vw', height: '64vh', backgroundColor: '#FFE4E1', borderRadius: '8px'}}>
            {remainingTime ?
            (
            <Typography variant='h1' style = {{textAlign: 'center'}}>
                <p> {`${h} : ${m} : ${s}`} </p>
            </Typography>) : (<Typography>
                <p> {`0${timer['hour']} : 0${timer['minute']} : 0${timer['second']}`} </p>
            </Typography>)
            }
            <div style = {{margin: '0px 24vw'}}>
            <form onSubmit = {handleSubmit}>
            <div>
            <FormControl size="medium" style={{ width: "96px", margin: "4px 6px" }}>
                <InputLabel id="hour"> hour </InputLabel>
                <Select
                    labelId="hour"
                    id="hour"
                    value={values.hour}
                    label="hour"
                    onChange={handleChange}
                    name="hour"
                >
                    <MenuItem style={{ color: "black" }} value={'None'}>
                    <em>None</em>
                    </MenuItem>
                    {rangeTime(0, 23).map((pr, id) => {
                        return (
                            <MenuItem style={{ color: "black" }} value={pr} size="small" key={id}> {pr} </MenuItem>
                        )})}

                </Select>
            </FormControl >
            <FormControl size="medium" style={{ width: "96px", margin: "4px 6px" }}>
                <InputLabel id="minute"> minute </InputLabel>
                <Select
                    labelId="minute"
                    id="minute"
                    value={values.minute}
                    label="minute"
                    onChange={handleChange}
                    name="minute"
                >
                    <MenuItem style={{ color: "black" }} value={'None'}>
                    <em>None</em>
                    </MenuItem>
                    {rangeTime(0, 59).map((pr, id) => {
                        return (
                            <MenuItem style={{ color: "black" }} value={pr} size="small" key={id}> {pr} </MenuItem>
                        )})}

                </Select>
            </FormControl >
            <FormControl size="medium" style={{ width: "96px", margin: "4px 6px" }}>
                <InputLabel id="second"> second </InputLabel>
                <Select
                    labelId="second"
                    id="second"
                    value={values.second}
                    label="second"
                    onChange={handleChange}
                    name="second"
                >
                    <MenuItem style={{ color: "black" }} value={'None'}>
                    <em>None</em>
                    </MenuItem>
                    {rangeTime(0, 59).map((pr, id) => {
                        return (
                            <MenuItem style={{ color: "black" }} value={pr} size="small" key={id}> {pr} </MenuItem>
                        )})}

                </Select>
            </FormControl>
            </div>
            
            <Button type = 'submit' disabled = {!startCount === false} variant = 'outlined' style = {{margin: '10px'}}>
                Set timer
            </Button>
            </form>
            </div>
           <div style = {{margin: '0px 24vw'}}>
           <Button onClick = {() => {
                setCountDown(new Date(new Date().getTime() + (timer.hour)*60*60*1000 + (timer.minute)*60*1000 + (timer.second)*1000))
                setStartCount(true)
            }} variant = 'outlined' style = {{margin: '10px'}}>
                Start countdown
            </Button>
            <div>
            <Button onClick = {() => {
                setStartCount(false)
                if (timer !== null) {
                    let hr
                    let mm
                    let ss
                    
                    if (remainingTime['hour'] !== 0 || remainingTime['minute'] !== 0 || remainingTime['second'] !== 0)
                    {
                        hr = remainingTime['hour']
                        mm = remainingTime['minute']
                        ss = remainingTime['second']
                        setCountDown(remainingTime)
                        localStorage.setItem('diff', JSON.stringify({diff: hr*60*60*1000 + mm*60*1000 + ss*1000}))
                    } else {
                        setRemainingTime(timer)
                        setCountDown(timer)
                    }
                }}}
            variant = 'outlined' style = {{margin: '10px'}}>
                Stop
            </Button>
            <Button onClick = {() => {
                setStartCount(true)
            }} variant = 'outlined'>
                Continue
            </Button>
            </div>
            
           </div>
            </Box>
            
        </div>
    )
}

export default RenderTimer