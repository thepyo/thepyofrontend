import { globalConfig } from "@/theme/config"

export const imageCdn = (url) => {
    if(!url) return "/slide.jpg"
    return `${globalConfig.cdn_url}${url}`
}