import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import { Card, FormControl, MenuItem, Select, InputLabel, Button, Typography, Divider, Box, CardContent, CardMedia, Alert, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import NotificationsIcon from '@mui/icons-material/Notifications';

const RenderReminder = ({ onSubmit, hourDigital, minuteDigital,
                            secondDigital, pauseAlarm, isValid,
}) => {
    
    const [added, setAdded] = useState(false)
    const { startAlarm, setStartAlarm } = useContext(AuthContext)
    const { alarm, setAlarm } = useContext(AuthContext)

    function rangeTime(start, end) {
        const range = [...Array(end - start + 1).keys()].map(x => x + start);
        return range
    }

    useEffect(() => {
        setAlarm(JSON.parse(localStorage.getItem('alarm')))
    }, [])

    const clockImg = 'https://i.pinimg.com/564x/28/cc/0f/28cc0f12927d464be3811a2a70873976.jpg'
    const waterImg = 'https://i.pinimg.com/564x/7c/66/98/7c6698f8a5a16343f9e0631cf0103485.jpg'
    const alarmImg = 'https://i.pinimg.com/564x/b8/85/6f/b8856f40abade6058f8b21b2cb624642.jpg'
    const plantImg = 'https://i.pinimg.com/564x/17/ac/e5/17ace56eca72e828dabb8b104cc8f9e0.jpg'
    const rImg = `url(${plantImg})`
    const cookImg = 'https://i.pinimg.com/564x/06/2b/29/062b290ff75a143137039212610f28a5.jpg'
    const cImg = `url(${cookImg})`
    const hangoutImg = 'https://i.pinimg.com/564x/60/23/38/602338272dc1349748bf793773bfc5a8.jpg'
    const hImg = `url(${hangoutImg})`
    const wImg = `url(${waterImg})`

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            hour: 0,
            min: 0,
            second: 0
        },
        onSubmit
    })

    // console.log(typeof values.hour)
    // console.log(timeRange)
    const [open, setOpen] = React.useState(false);
    const [numb, setNumb] = useState(-1)

    const handleClick = (n) => {
        setOpen(true);
        setAlarm(prev => {
                if (prev.indexOf(sampleTime[n]) === - 1) {
                    localStorage.setItem('alarm', JSON.stringify([...prev, sampleTime[n]]))
                    return [...prev, sampleTime[n]]
                }
                else return prev
            }
        )
    }
    ;

    // console.log(alarm)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const sampleTime = ["8 : 00 : 00", "10 : 10 : 00", "16 : 25 : 00", "16 : 00 : 00"]

    return (
        <div>
            {isValid ? (
                <div style={{ display: "flex", flexDirection: 'row', height: "100vh" }}>
                    <div style={{ flex: "1" }}>
                        <div style={{
                            backgroundImage: `url(${alarmImg})`, backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat', height: "40vh", margin: "32px 24px 24px 24px", borderRadius: '8px'
                        }}>

                        </div>
                        <Card style={{ margin: "0px 24px", height: "44vh" }}>
                            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', margin: "16px" }}>
                                Local Time {hourDigital} : {minuteDigital}: {secondDigital}
                            </Typography>

                            <form onSubmit={handleSubmit}>
                                <div style={{ display: "flex", flexDirection: "row", margin: "8px 54px" }}>
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
                                                )
                                            })}

                                        </Select>
                                    </FormControl >
                                    <FormControl size="medium" style={{ width: "96px", margin: "4px 6px" }}>
                                        <InputLabel id="min"> minutes </InputLabel>
                                        <Select
                                            labelId="min"
                                            id="min"
                                            value={values.min}
                                            label="min"
                                            onChange={handleChange}
                                            name="min"
                                        >
                                            <MenuItem style={{ color: "black" }} value={'None'} >
                                                <em>None</em>
                                            </MenuItem>
                                            {rangeTime(0, 59).map((pr, id) => {
                                                return (
                                                    <MenuItem style={{ color: "black" }} value={pr} size="small" key={id}> {pr} </MenuItem>
                                                )
                                            })}

                                        </Select>
                                    </FormControl>

                                    <FormControl size="medium" style={{ width: "96px", margin: "4px 6px" }}>
                                        <InputLabel id="second"> seconds </InputLabel>
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
                                                )
                                            })}

                                        </Select>
                                    </FormControl>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', margin: "12px 54px" }}>
                                    <Button type='submit' variant='outlined' style={{ margin: "0px 6px" }}>
                                        Set Alarm
                                    </Button>
                                    
                                </div>
                            </form>

                            {alarm &&
                                (<Typography style={{ margin: "4px 56px" }}>
                                    Alarm current set
                                </Typography>)}

                        </Card>


                    </div>

                    <div style={{ flex: "2", display: 'flex', flexDirection: "column" }}>
                        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                            {<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                This event is added to incoming reminder
                            </Alert>}
                        </Snackbar>
                        <Typography style={{ margin: "10px 0px 0px 6px" }} variant='h6'>
                            Recommended today's reminders
                        </Typography>
                        <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                            <Card sx={{ display: 'flex', margin: "28px 12px 6px 12px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    style={{ backgroundImage: rImg }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h6">
                                            Plant a new tree
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div" style={{ margin: "12px 6px 8px 6px" }}>
                                            <Button variant='outlined' disabled = {Date.parse(`01/01/2011 ${sampleTime[0].replaceAll(' ','')}`) < Date.parse(`01/01/2011 ${hourDigital}:${minuteDigital}:${secondDigital}`)} onClick={() => handleClick(0)}>
                                                <NotificationsIcon /> {sampleTime[0]}
                                            </Button>
                                        </Typography>
                                    </CardContent>
                                </Box>

                            </Card>
                            <Card sx={{ display: 'flex', margin: "32px 12px 6px 12px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    style={{ backgroundImage: cImg }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h6">
                                            Cook a good meal
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div" style={{ margin: "12px 6px 8px 6px" }}>
                                            <Button variant='outlined' disabled = {Date.parse(`01/01/2011 ${sampleTime[1].replaceAll(' ','')}`) < Date.parse(`01/01/2011 ${hourDigital}:${minuteDigital}:${secondDigital}`)} onClick={() => handleClick(1)}>
                                                <NotificationsIcon /> {sampleTime[1]}
                                            </Button>
                                        </Typography>
                                    </CardContent>
                                </Box>

                            </Card>
                            <Card sx={{ display: 'flex', margin: "32px 12px 6px 12px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    style={{ backgroundImage: wImg }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h6">
                                            Drink enough water
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div" style={{ margin: "12px 6px 8px 6px" }}>
                                            <Button variant='outlined' disabled = {Date.parse(`01/01/2011 ${sampleTime[2].replaceAll(' ','')}`) < Date.parse(`01/01/2011 ${hourDigital}:${minuteDigital}:${secondDigital}`)} onClick={() => handleClick(2)}>
                                                <NotificationsIcon /> {sampleTime[2]}
                                            </Button>
                                        </Typography>
                                    </CardContent>
                                </Box>

                            </Card>
                            <Card sx={{ display: 'flex', margin: "32px 12px 6px 12px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    style={{ backgroundImage: hImg }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h6">
                                            Hang out with friends
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div" style={{ margin: "12px 6px 8px 6px" }}>
                                            <Button variant='outlined' disabled = {Date.parse(`01/01/2011 ${sampleTime[3].replaceAll(' ','')}`) < Date.parse(`01/01/2011 ${hourDigital}:${minuteDigital}:${secondDigital}`)} onClick={() => handleClick(3)}>
                                                <NotificationsIcon /> {sampleTime[3]}
                                            </Button>
                                        </Typography>
                                    </CardContent>
                                </Box>

                            </Card>
                        </div>
                        <Divider style={{ margin: "20px 0px" }} fullWidth />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ flex: '1' }}>
                                <Typography variant='h6'>
                                    Incoming alarm
                                </Typography>
                                {alarm.map(a => {
                                    if (a > `${hourDigital} : ${minuteDigital} : ${secondDigital}`) return (
                                        <Typography>
                                            {a}
                                        </Typography>
                                    )
                                })}
                            </div>
                            <div style={{ flex: '1' }}>
                                <Typography variant='h6'>
                                    Past alarm
                                </Typography>
                                {alarm.map(a => {
                                    if (a < `${hourDigital} : ${minuteDigital} : ${secondDigital}`) return (
                                        <Typography>
                                            {a}
                                        </Typography>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <div style = {{margin: '20px'}}>

                    <p style = {{margin: "0px 10px"}}> Your time is expired </p>
                    <Link to = '/login' style = {{textDecoration: 'none'}}>
                    <Button variant = "contained" style = {{margin: '10px'}}>
                        return to login
                    </Button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default RenderReminder