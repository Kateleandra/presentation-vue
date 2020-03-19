import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3003/api/'
})

export default http