import axios from "axios"
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})
export const brandRoute = () => api.get("/api/brands")
export const singleBrandRoute = (brandId) => api.get(`/api/brands/${brandId}`)
export const commentRoute = () => api.get("/api/comments")
export const contactRoute = () => api.get("/api/contacts")
export const videoRoute = () => api.get("/api/videos")
export const visualCommRoute = () => api.get("/api/visualComms")