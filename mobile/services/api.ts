import axios from 'axios';


export const api = axios.create({
    baseURL:"http://192.168.100.14:3333"
})

//:"http://192.168.100.14:3333/create"