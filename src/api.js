import axios from "axios"
export const api = axios.create({
    baseURL: import.meta.env.VITE_API,
    withCredentials: true
})
export const brandRoute = () => api.get("/api/brands")
export const commentRoute = () => api.get("/api/comments")
export const contactRoute = () => api.get("/api/contacts")
export const videoRoute = () => api.get("/api/videos")
export const visualCommRoute = () => api.get("/api/visualComms")