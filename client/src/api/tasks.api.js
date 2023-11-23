import axios from 'axios'

const TaskApi = axios.create({

    baseURL: 'http://localhost:8000/tareas/api/v1/tareas/'

})


export const getAllTasks = () => TaskApi.get('/');

export const getTask = (id) => TaskApi.get(`/${id}/`);

export const createTask = (task) => TaskApi.post('/', task);

export const deleteTask = (id) => TaskApi.delete(`/${id}`)

export const updateTask = (id, task) => TaskApi.put(`/${id}/`, task)
