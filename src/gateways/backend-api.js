import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:1234',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  }
})
