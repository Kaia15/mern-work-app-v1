import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL : 'https://kaiaworkapp.herokuapp.com/'
})