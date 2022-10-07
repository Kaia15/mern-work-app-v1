import React from 'react'
import {useFormik} from 'formik'
import Box from '@mui/material/Box';
import { Button, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';


const RenderAddTask = ({func, onSubmit, userId, tasks}) => {
    const {values, errors, handleBlur, handleSubmit, handleChange, onChange, onBlur, isSubmitting } = 
    useFormik({
        initialValues: {
            title: "",
            progress: "",
            notes: "",
            category: "",
            priority: "",
            deadline: "",
            ownerID: userId
        },
        onSubmit
    })

    console.log(values['deadline'])
    // console.log(userId)
    // console.log(tasks)

    return (
        <div style = {{backgroundColor: "white", height: "100vh"}}>
            <h3 style = {{margin: '18px 20vw'}}> New task</h3>
            <Divider width = '75%' />
            <form onSubmit = {handleSubmit} style = {{padding: "16px 16vw"}}>
            <Box style = {{margin: "0 0 12px 0"}}
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    
                }} 
                >
                    <TextField 
                    label = "Title"
                    type = "text"
                    id = "title"
                    value = {values.title}
                    onChange = {handleChange}
                    />
            </Box>
            <Box style = {{margin: "0 0 12px 0"}}
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    
                }} 
                >
                    <TextField 
                    label = "Notes"
                    type = "text"
                    id = "notes"
                    value = {values.notes}
                    onChange = {handleChange}
                    />
            </Box>
            <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="priority"> Priority </InputLabel>
                <Select
                labelId="priority"
                id="priority"
                value={values.priority}
                label="priority"
                onChange={handleChange}
                name = "priority"
                >
                <MenuItem style = {{color: "black"}} value= {'None'}>
                    <em>None</em>
                </MenuItem>
                <MenuItem style = {{color: "black"}} value={'Low'}>Low</MenuItem>
                <MenuItem style = {{color: "black"}} value={'Medium'}>Medium</MenuItem>
                <MenuItem style = {{color: "black"}} value={'High'}>High</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="progress"> Status </InputLabel>
                <Select
                labelId="progress"
                id="progress"
                value={values.progress}
                label="progress"
                onChange={handleChange}
                name = "progress"
                >
                <MenuItem style = {{color: "black"}} value= {'None'}>
                    <em>None</em>
                </MenuItem>
                <MenuItem style = {{color: "black"}} value={'Looking'}>Looking</MenuItem>
                <MenuItem style = {{color: "black"}} value={'In progress'}>In Progress</MenuItem>
                <MenuItem style = {{color: "black"}} value={'Cancel'}>Cancel</MenuItem>
                <MenuItem style = {{color: "black"}} value={'Done'}>Done</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="category"> Category </InputLabel>
                <Select
                labelId="category"
                id="category"
                value={values.category}
                label="category"
                onChange={handleChange}
                name = "category"
                >
                <MenuItem style = {{color: "black"}} value= {'None'}>
                    <em>None</em>
                </MenuItem>
                <MenuItem style = {{color: "black"}} value={'daily'}> Daily </MenuItem>
                <MenuItem style = {{color: "black"}} value={'work'}> Work </MenuItem>
                <MenuItem style = {{color: "black"}} value={'study'}> Study </MenuItem>
                <MenuItem style = {{color: "black"}} value={'organization'}> Organization</MenuItem>
                </Select>
            </FormControl>
            </div>
            <TextField
                id="deadline"
                label="deadline"
                type="date"
                defaultValue="2017-05-24"
                value = {values.deadline}
                sx={{ width: 220 }}
                onChange = {handleChange}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <div>
            <Button 
            type = "submit"
            variant = "contained">
                {func}
            </Button>
            <Link to = '/task' style = {{textDecoration: 'none'}}>
                <Button style = {{margin: "24px 16px"}} variant = "contained">
                    RETURN TO ALL TASKS
                </Button>
            </Link>
            </div>
            
            </form>
            
        </div>
    )
}

export default RenderAddTask