import React, { useContext, useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../../context/context';
// import Field from '../../../components/fields';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import taskcss from './task.module.css'
import { TextField, Card, CardContent, Divider, CardActions } from '@mui/material';
import Field from '../../../components/fields';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DeleteIcon from '@mui/icons-material/Delete'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TuneIcon from '@mui/icons-material/Tune';
import PushPinIcon from '@mui/icons-material/PushPin';

const style = { 'Low': "#b5e2ff", 'Medium': '#ffb6c1', 'High': '#f5c77e' }

const morningImg = 'https://images.pexels.com/photos/57686/pexels-photo-57686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

const RenderTask = ({ handleViewByFilter, isValid, handleDelete, onSubmit, filter }) => {
    const { tasks, setTasks } = useContext(AuthContext)
    const [edit, setEdit] = useState(false)
    const { taskId, setTaskId } = useContext(AuthContext)
    const { user, setUser } = useContext(AuthContext)
    // console.log(tasks)
    const dashboard = 'DASHBOARD'
    const d = new Date();
    let hr = (new Date()).getHours()
    const bgImg =
        // 'https://media.istockphoto.com/photos/office-background-picture-id1189964480?k=20&m=1189964480&s=170667a&w=0&h=573pBxj4rVGr1gbIsOlhdJwutrl1rIhFHrkFl3AGujk='
        // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hBkL4rGNlfOjzl5zKzOoYfJ-cAYyJro436qKRbYjGKEubFXa3Yl66wss5JK32vp25u8&usqp=CAU'
        // 'https://img.freepik.com/free-photo/beautiful-shot-optical-glasses-cup-table-with-white-background-space-text_181624-1570.jpg?w=2000'
        // 'https://wallpaperaccess.com/full/4153370.jpg'
        // 'https://i.pinimg.com/736x/0d/3a/f9/0d3af9565b6db10f1d9c7a276dfd9d57.jpg'
        // 'https://i.pinimg.com/736x/b3/c7/d1/b3c7d116ebb295b19708c7391973b5b9--wallpaper-computer-desktop-wallpapers-desktop-backgrounds.jpg',

        // console.log(edit)
        // const func = 'SAVE'

        console.log(taskId)
    const taskbycategory = (tasks, pr) => {
        return tasks.filter((t) => t['progress'] === pr)
    }

    const catImg = (cat) => {
        switch (cat) {
            case 'study':
                return `url('https://i.pinimg.com/236x/ec/da/e1/ecdae16d8cbe59d266b7689abfa03c46.jpg')`
            case 'work':
                return `url('https://i.pinimg.com/236x/65/7b/2e/657b2e4c34d1360a579670fa7ca50037.jpg')`
            case 'organization':
                return ''
        }
    }


    const a = [taskbycategory(tasks, 'Looking'), taskbycategory(tasks, 'Cancel'), taskbycategory(tasks, 'Done')]
    console.log(a[0])
    // console.log(a)
    const bgUrl = `url(${bgImg})`
    const linkOptions = ['dashboard', 'task', 'profile', 'message', 'reminders']

    return (
        <div>
            {isValid && (tasks !== null) ? (
                <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
                    <div style={{
                        flex: "10", display: "flex", flexDirection: "row",
                    }}>
                        <div style={{ flex: "2"}}>
                            {linkOptions.map(link => {
                                return (
                                    
                                    <Link style={{ textDecoration: 'none' }} to={`/${link}`}>
                                        <Button style={{ height: "60px", color: 'black', margin: '0px 10px'}}>
                                            {link}
                                        </Button>
                                        <Divider width = '75%' style = {{}}/>
                                    </Link>
                                    
                                )
                            })}

                        </div>
                        <Divider orientation='vertical' fullWidth />
                        <div style={{ flex: "7", overflowY: 'scroll' }}>
                            <div>
                                <h4 style={{ marginLeft: "1.2vw" }}> Task </h4>
                            </div>
                            <div style={{ margin: "1vh 1vw", }}>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{ display: "flex", flexDirection: "row", margin: "0px 4px" }}>

                                        <Box
                                            sx={{
                                                width: 20,
                                                height: 20,
                                                backgroundColor: style['Low'], margin: "20px"
                                            }} ></Box>
                                        <p> Low </p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row" }}>

                                        <Box
                                            sx={{
                                                width: 20,
                                                height: 20,
                                                backgroundColor: style['Medium'], margin: "20px 40px"
                                            }} ></Box>
                                        <p> Medium </p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row" }}>

                                        <Box
                                            sx={{
                                                width: 20,
                                                height: 20,
                                                backgroundColor: style['High'], margin: "20px"
                                            }} ></Box>
                                        <p> High </p>
                                    </div>
                                </div>
                                <Divider style={{ margin: "0px 0px 20px 0px" }} />

                                {tasks.length > 0 ?

                                    (<div style={{ display: "flex", flexDirection: 'row' }}>
                                        <div style={{ flex: '1', margin: '0px -4px' }}>
                                            <h4 style={{ margin: "16px 0px", textAlign: 'center' }}>
                                                Incoming
                                            </h4>

                                            {a[0].map((it, id) => {
                                                const pr = it['priority']
                                                const m = style[pr]
                                                // console.log(a)
                                                return (
                                                    <div>
                                                        <Card sx={{ maxWidth: '200', margin: "16px 0px 0px 16px" }}>
                                                            <CardContent>
                                                                <Typography variant="h6" component="div" style={{ display: 'flex', flexDirection: 'row' }}>
                                                                    <Box sx={{ width: 20, height: 20, backgroundColor: m }} style={{ margin: "6px 8px 6px 4px" }} />
                                                                    {it['title'].toUpperCase()}
                                                                </Typography>
                                                                <Typography sx={{ mb: 2, mt: 1.2 }} color="text.secondary">
                                                                    <CalendarTodayIcon style={{ margin: "-2px 2px" }} /> by {it['deadline']}
                                                                </Typography>
                                                                <Typography variant="body2">
                                                                    {`${it['notes']}...`}
                                                                </Typography>
                                                            </CardContent>
                                                            <CardActions>
                                                                <Button onClick={() => {
                                                                    setEdit(!edit)
                                                                    setTaskId(it['_id'])
                                                                }} style={{ margin: "0px 5px" }} variant='outlined'>
                                                                    Edit
                                                                </Button>
                                                                <Button onClick={() => {
                                                                    handleDelete(it['_id'])
                                                                }} variant='outlined'>
                                                                    Delete
                                                                </Button>
                                                            </CardActions>
                                                        </Card>

                                                        {taskId === it['_id'] && <Field onSubmit={onSubmit} task={it} />}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div style={{ flex: '1' }}>
                                            <h4 style={{ margin: "16px 0px", textAlign: 'center' }}>
                                                Done
                                            </h4>
                                            {a[2].map((it, id) => {
                                                const pr = it['priority']
                                                const m = style[pr]
                                                return (
                                                    <div>
                                                        <Card sx={{ maxWidth: '200', margin: "16px 0px 0px 16px" }}>
                                                            <CardContent>
                                                                <Typography variant="h6" component="div" style={{ display: 'flex', flexDirection: 'row' }}>
                                                                    <Box sx={{ width: 20, height: 20, backgroundColor: m }} style={{ margin: "6px 8px 6px 4px" }} />
                                                                    {it['title'].toUpperCase()}
                                                                </Typography>
                                                                <Typography sx={{ mb: 2, mt: 1.2 }} color="text.secondary">
                                                                    <CalendarTodayIcon style={{ margin: "-2px 2px" }} /> by {it['deadline']}
                                                                </Typography>
                                                                <Typography variant="body2">
                                                                    {`${it['notes']}...`}
                                                                </Typography>
                                                            </CardContent>
                                                            <CardActions>
                                                                <Button onClick={() => {
                                                                    setEdit(!edit)
                                                                    setTaskId(it['_id'])
                                                                }} style={{ margin: "0px 5px" }} variant='outlined'>
                                                                    Edit
                                                                </Button>
                                                                <Button onClick={() => {
                                                                    handleDelete(it['_id'])
                                                                }} variant='outlined'>
                                                                    Delete
                                                                </Button>
                                                            </CardActions>
                                                        </Card>

                                                        {taskId === it['_id'] && <Field onSubmit={onSubmit} task={it} />}
                                                    </div>
                                                )
                                            })

                                            }
                                        </div>
                                        <div style={{ flex: '1' }}>
                                            <h4 style={{ margin: "16px 0px", textAlign: 'center' }}>
                                                Cancel
                                            </h4>
                                            {a[1].map((it, id) => {
                                                const pr = it['priority']
                                                const m = style[pr]
                                                return (
                                                    <div>
                                                        <Card sx={{ maxWidth: '200', margin: "16px 0px 0px 16px" }}>
                                                            <CardContent>
                                                                <Typography variant="h6" component="div" style={{ display: 'flex', flexDirection: 'row' }}>
                                                                    <Box sx={{ width: 20, height: 20, backgroundColor: m }} style={{ margin: "6px 8px 6px 4px" }} />
                                                                    {it['title'].toUpperCase()}
                                                                </Typography>
                                                                {it['deadline'] === '' ?
                                                                    (
                                                                        <Typography sx={{ mb: 2, mt: 1.2 }} color={'GrayText'}>
                                                                            no due date
                                                                        </Typography>) :
                                                                    (<Typography sx={{ mb: 2, mt: 1.2 }} color="text.secondary">
                                                                        <CalendarTodayIcon style={{ margin: "-2px 2px" }} /> by {it['deadline']}
                                                                    </Typography>
                                                                    )}
                                                                <Typography variant="body2">
                                                                    {`${it['notes']}...`}
                                                                </Typography>
                                                            </CardContent>
                                                            <CardActions>
                                                                <Button onClick={() => {
                                                                    setEdit(!edit)
                                                                    setTaskId(it['_id'])
                                                                }} style={{ margin: "0px 5px" }} variant='outlined'>
                                                                    Edit
                                                                </Button>
                                                                <Button onClick={() => {
                                                                    handleDelete(it['_id'])
                                                                }} variant='outlined'>
                                                                    Delete
                                                                </Button>
                                                            </CardActions>
                                                        </Card>

                                                        {taskId === it['_id'] && <Field onSubmit={onSubmit} task={it} />}

                                                    </div>
                                                )
                                            })}
                                        </div>

                                    </div>) :
                                    (<div>
                                        <p style={{ color: "black", margin: "30px 0px 0px 2vw" }}> You do not have any tasks in last 10 days. </p>
                                    </div>)
                                }


                            </div>
                            <div>
                                <Link to='/addtask' style = {{textDecoration: 'none'}}>
                                    <Button style={{ margin: "20px 1.8vw", width: "200px" }} variant="contained" >
                                        <AddIcon /> Add tasks
                                    </Button>
                                </Link>

                            </div>

                        </div>
                    </div>
                    <div style={{ flex: "3", display: "flex", flexDirection: "column" }}>
                        {(hr >= 18 && hr <= 24) ? (<img src="https://cdn.dribbble.com/users/1744106/screenshots/4438781/media/2b636c4664452aeb8092e46db9503fcd.png?compress=1&resize=800x600&vertical=top" style={{ height: "40%", width: "90%", margin: "16px", borderRadius: "8px" }} />)
                            : (<img src="https://cdn.dribbble.com/users/6024852/screenshots/15984853/media/e15ec9711a2572a146e14f5f2c38f7e3.jpg?compress=1&resize=1000x750&vertical=top" style={{ height: "40%", width: "90%", margin: "16px", borderRadius: "8px" }} />)}

                        <Typography variant="h5" style={{ textAlign: "center" }}>
                            {d.toDateString()}
                        </Typography>
                    </div>
                </div>
            ) : (
                <div>
                    <p style={{ color: "black" }}> Your time is expired </p>
                    <Link to='/login'>
                        <Button
                            style={{ color: 'black', margin: "0px 16vw" }}
                        >
                            LOGIN AGAIN
                        </Button>
                    </Link>
                </div>
            )
            }

        </div >
    )
}

export default RenderTask