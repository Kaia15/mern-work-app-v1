import React, {useState, useEffect, useContext} from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { TextField, Button, Card, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import { AuthContext } from '../context/context'

const priority = ['Low', 'Medium', 'High']
const progress = ['Looking', 'In Progress', 'Cancel', 'Done']
const category = ['daily', 'work', 'study', 'organization']

const Field = ({onSubmit, task}) => {
    // const {tasks, setTasks} = useContext(AuthContext)
    // console.log(task['title'])
    const {taskId, setTaskId} = useContext(AuthContext)
    const {values, errors, handleBlur, handleSubmit, handleChange, onChange, onBlur, isSubmitting } = 
    useFormik({
        initialValues: {
            title: "",
            progress: "",
            notes: "",
            category: "",
            priority: "",
            deadline: "",
            ownerID: task['ownerID']
        },
        onSubmit
    })

    console.log(values)

    return (
        <Card style = {{height: "284px", margin: "12px 8px 0px 24px", width: "24vw"}}>
        <form onSubmit={handleSubmit}>
            <TextField 
            label = "new title"
            id = "title"
            value = {values.title}
            onChange = {handleChange}
            type = 'text'
            style = {{margin: "4px 8px"}}
            placeholder = {task['title']}
            size = "small"
            />
            <TextField 
            label = "new notes"
            id = "notes"
            value = {values.notes}
            onChange = {handleChange}
            type = 'text'
            style = {{margin: "4px 8px"}}
            placeholder = {task['notes']}
            size = "small"
            />
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
                {priority.map((pr, id) => {
                    return (
                        <MenuItem style = {{color: "black"}} value={pr} size = "small"> {pr} </MenuItem>
                    )
                })}
                
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
                placeholder={task['progress']}
                >
                <MenuItem style = {{color: "black"}} value= {'None'}>
                    <em>None</em>
                </MenuItem>
                {progress.map((pro, id) => {
                    return (
                        <MenuItem style = {{color: "black"}} value={pro}>{pro}</MenuItem>
                    )
                })}
                </Select>
            </FormControl>
            
            <TextField
                id="deadline"
                label="deadline"
                type="date"
                defaultValue={task['deadline']}
                value = {values.deadline}
                sx={{ width: 220 }}
                onChange = {handleChange}
                InputLabelProps={{
                shrink: true,
                }}
                style = {{margin: "0px 6px"}}
            />
            </div>
            <Button type = 'submit' variant = 'outlined' style = {{margin: "2px 5px"}}>
                Save
            </Button>
            <Button onClick  ={() => setTaskId("")} variant = 'outlined' style = {{margin: "2px 5px"}}>
                Cancel
            </Button>
        </form>
        </Card>
        
    )
}

export default Field