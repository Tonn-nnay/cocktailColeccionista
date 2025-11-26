import axios from 'axios'
const urlBase = import.meta.env.VITE_URL

const api = axios.create({
  baseURL: urlBase,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
