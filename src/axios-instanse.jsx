import axios from 'axios'

export const InstanceAPI = axios.create({
    baseURL: 'https://dummyjson.com',
  });