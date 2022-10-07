import RenderTask from "./task/task"
import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../../context/context"
// import { axios } from "../../config"

const getAllTasks = async (user) => {
    console.log(user['accessToken'])
    const res = await axios.get('http://localhost:8000/task',
        {
            headers: { token: `Bearer ${user.accessToken}` }
        })
    const data = await res.data
    console.log(data)
    return data
}

const getAllTasksByFilter = async (user, body) => {
    const res = await axios.get('http://localhost:8000/task/',
        { ...body },
        {
            headers: { token: `Bearer ${user.accessToken}` },
        })
    const data = await res.data
    return data
}

const updateTask = async (user, body, taskId) => {
    const res = await axios.patch(`http://localhost:8000/task/${taskId}/edit`,
    { ...body },
    {
        headers: { token: `Bearer ${user.accessToken}` },
    })
    const data = await res.data
    return data
}

const deleteTask = async (taskId) => {
    const deleted = await axios.delete(`http://localhost:8000/task/${taskId}/delete`)
    return deleted
}

const Task = () => {
    const { tasks, setTasks } = useContext(AuthContext)
    const {taskId, setTaskId} = useContext(AuthContext)
    const {isValid, setIsValid} = useContext(AuthContext)
    const validToken = localStorage.getItem('validToken');
    // const {user, setUser} = useContext(AuthContext)
    // let isValid = false;
    // const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // let tasks = [];
    // console.log(tasks)

    useEffect(() => {
        if (validToken !== null) {
        const parseToken = JSON.parse(validToken);
        setIsValid(parseToken['valid'])
    } else {
        setIsValid(false)
    }}, [])

    useEffect(() => {
        if (isValid) {
            const user = JSON.parse(localStorage.getItem('user'))
            console.log(user)
            if (user !== null) {
                // setUser(user)
                const allTasks = getAllTasks(user)
                // console.log(user['_id'])
                allTasks
                    .then(res => {
                        // console.log(res)
                        // localStorage.setItem('tasks', JSON.stringify(res))
                        if (res !== []) {
                            const filter = res.filter((task, id) => {
                                return task['ownerID'] === user['id'] 
                            })
                            // console.log(filter)
                            setTasks(filter)
                        }
                        else {
                            setTasks([])
                        }
                    })
                    .catch(err => console.log(err))
            } else {
                setTasks([])
            }
        } else {
            setTasks([])
            //localStorage.setItem('tasks', JSON.stringify([]))
        }
    }, [isValid])



    const handleViewByFilter = () => {

    }

    /*const handleDelete = (id) => {
        console.log(id)
        if (isValid) {
            setTasks(prev => {
                return prev.filter(task => task['_id'] !== id)
            }) 
            const deleted = deleteTask(id)
            deleted
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
    }*/

    // tasks = JSON.parse(localStorage.getItem('tasks')) || []
    // console.log(tasks)
    const handleDelete = (id) => {
        // console.log(id)
        setTasks(prev => { 
            const afterfilter = prev.filter((t) => t['_id'] !== id)
            // console.log(afterfilter)
            return afterfilter
        })
        deleteTask(id)
        .then(res => {const b = (res.data)})
        .catch(err => console.log(err))
    }

    const onSubmit = async (values, actions) => {
        // const newTask = 
        const user = JSON.parse(localStorage.getItem('user'))
        if (user !== null) 
        {
            updateTask(user, values, taskId)
            .then(data => setTasks(prev => {
                prev = prev.filter(t => t['_id'] !== taskId)
                prev = [...prev, data]
                return prev
            }))
        }

        actions.resetForm();
        setTaskId("")
    }

    const filter = () => {

    }
    console.log(tasks)
    console.log(taskId)

    return (
        <RenderTask
            handleViewByFilter={handleViewByFilter}
            // tasks = {tasks}
            // setTasks = {setTasks}
            isValid={isValid}
            handleDelete = {handleDelete}
            onSubmit = {onSubmit}
            filter = {filter}
        />
    )
}

export default Task