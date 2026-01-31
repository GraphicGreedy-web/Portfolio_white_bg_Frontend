import { getBrandHook, getVideoHook, getVisualCommHook } from "../hooks/fetchHook.js"
export const useFeatures = () => {
    const videos = getVideoHook()
    const brands = getBrandHook()
    const visuals = getVisualCommHook()
    return { videos, brands, visuals }
}