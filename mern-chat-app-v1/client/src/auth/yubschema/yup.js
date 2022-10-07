import * as yup from 'yup'

const regEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/

export const userSchema = yup.object().shape({
    username: yup.string().min(2).required("username is required"),
    name: yup.string().min(2).required("name is required"),
    email: yup.string().email("please enter a valid email address").required("email is required for signup"),
    password: yup.string().min(8).max(8).matches(regEx, { message: "Please create a stronger password" }).required("password must be exactly 8 characters, including 0-9 digits, uppercase letters, and lowercase letters"),
    
})

export const loginSchema = yup.object().shape({
    email: yup.string().email("please enter a valid email address").required("Email is  required for login"),
    password: yup.string().min(8).max(8).matches(regEx, { message: "Please create a stronger password" }).required("password must be exactly 8 characters, including 0-9 digits, uppercase letters, and lowercase letters")
})

export const editSchema = yup.object().shape({
    username: yup.string().min(2).required("Your username is required"),
    name: yup.string().min(2).required("Your name is required"),
})

export const edittaskSchema = yup.object().shape({
    title: yup.string().required("new title is required"),
    deadline: yup.string().required("new due date is required"),
    notes: yup.string().required("new notes is required"),
    category: yup.string().required("new category is required"),
    progress: yup.string().required("progress is required"),
    priority: yup.string().required("priority is required"),
})