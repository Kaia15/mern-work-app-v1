import React, {useContext, useEffect} from 'react'
import RenderAddTask from './addtask/addtask'
import axios from 'axios'
import { AuthContext } from '../../../context/context'

const addTask = async (taskbody, user) => {
    const res = await axios.post('http://localhost:8000/task/create', 
        {...taskbody}, 
        {
        headers: {token: `Bearer ${user['accessToken']}`}
        }
    )
    const data = await res.data
    return data
}

const Task = () => {
    const validToken = localStorage.getItem('validToken');
    const {tasks, setTasks} = useContext(AuthContext)
    const {isValid, setIsValid} = useContext(AuthContext)


    const user = JSON.parse(localStorage.getItem('user'))
    // const parseUser = JSON.parse(user)
    let userId = user['id']

    useEffect(() => {
        const validToken = localStorage.getItem('validToken');
        if (validToken !== null)
        {
            const parseToken = JSON.parse(validToken);
            // console.log(parseToken)
            setIsValid(parseToken['valid']);
        } else {
            setIsValid(false)
        }
    }, [])


    const onSubmit = (values, actions) => {
        const oldTasks = JSON.parse(localStorage.getItem('tasks'))
        if (isValid) {
            const parseUser = JSON.parse(localStorage.getItem('user'))
            if (parseUser !== null)
            {
                const task = addTask({...values}, user)
                task
                .then(res => {
                    // console.log(res)
                    setTasks(prev => [...prev, res])
                    // console.log(res)
                    // localStorage.setItem('task', JSON.stringify([res, ...oldTasks]))
                    // tasks = [res, ...oldTasks] || []
                    // console.log(tasks)
                    actions.resetForm()
                })
            } else {
                // localStorage.setItem('task', JSON.stringify(oldTasks))
                actions.resetForm()
            }
        } else {
            // localStorage.setItem('task', JSON.stringify(oldTasks))
            actions.resetForm()
        }
    }


    
    const func = 'ADD TASK'
    return (
        <RenderAddTask onSubmit={onSubmit} userId = {userId} tasks = {tasks} func = {func}/>
    )
}
export default Task