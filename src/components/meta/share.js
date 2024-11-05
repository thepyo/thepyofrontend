import { Tooltip } from '@mui/material'
import { IconBrandFacebook, IconBrandTelegram, IconBrandTwitter, IconBrandWhatsapp, IconMail } from '@tabler/icons-react'
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    EmailShareButton
} from 'next-share'

export default function ShareSocial({
    url = "/",
    title = "",
    description = ""
}){
    return(
        <>
            
            <FacebookShareButton
                url={url}
                quote={title}
                hashtag={'#nextshare'}
            >
                <Tooltip title="Chia sẻ bài viết trên facebook">
                    <IconBrandFacebook size={18} color="#666"/>
                </Tooltip>
            </FacebookShareButton>

            <TwitterShareButton
                url={url}
                title={title}
            >
                <Tooltip title="Chia sẻ bài viết trên Twitter"><IconBrandTwitter size={18} color="#666"/></Tooltip>
            </TwitterShareButton>

            <TelegramShareButton
                url={url}
                title={title}              
            >
                <Tooltip title="Chia sẻ bài viết trên Telegram"><IconBrandTelegram size={18} color="#666"/></Tooltip>
            </TelegramShareButton>

            <WhatsappShareButton
                url={url}
                title={title}
                separator=":: "
            >
                <Tooltip title="Chia sẻ bài viết trên Whatsapp"><IconBrandWhatsapp size={18} color="#666"/></Tooltip>
            </WhatsappShareButton>

            <EmailShareButton
                url={url}
                subject={description}
                body="body"
            >
                <Tooltip title="Gửi email bài viết cho bạn bè"><IconMail size={18} color="#666"/></Tooltip>
            </EmailShareButton>
        </>
    )
}