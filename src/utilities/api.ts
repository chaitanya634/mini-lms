import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    "accept": "application/json",
    "Content-Type": "application/json"
  }
})

api.interceptors.request.use((config) => {
  console.log("Request: ", config)
  return config
})

api.interceptors.response.use((response) => {
  console.log("Response: ", response)
  return response
}, (error) => {
  console.log("Error: ", error)
  return Promise.reject(error)
})