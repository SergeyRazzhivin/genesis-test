import axios, { AxiosInstance } from 'axios'

const appAxios: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  timeout: 1000 * 60 * 5,
})

export default appAxios
