import { brandRoute, commentRoute, contactRoute, videoRoute, visualCommRoute } from "../api"

export const getBrand = async () => {
    const res = await brandRoute()
    return res?.data?.brands
}
export const getComment = async () => {
    const res = await commentRoute()
    return res?.data?.comments
}
export const getContact = async () => {
    const res = await contactRoute()
    return res?.data?.contacts
}
export const getVideo = async () => {
    const res = await videoRoute()
    return res?.data?.videos
}
export const getVisualComm = async () => {
    const res = await visualCommRoute()
    return res?.data?.visuals
}