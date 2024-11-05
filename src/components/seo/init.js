import { globalConfig } from "@/theme/config";
import theme from "@/theme/default";
import { NextSeo } from "next-seo";

export default function DefaultSeo({
    title = "Phòng khám Thẩm Mỹ The Pyo Nơi Biến Giấc Mơ Thành Hiện Thực",
    description = "Tại The Pyo, mọi khuyết điểm sẽ được hóa thành ưu điểm. Với đội ngũ chuyên gia hàng đầu và công nghệ hiện đại, The Pyo cam kết mang lại vẻ đẹp hoàn hảo.",
    url = globalConfig.home_url,
    images = [
        {
            url: '/thepyo1.jpg',
            width: 800,
            height: 600,
            alt: 'Viện thẩm mỹ The Pyo',
            type: 'image/jpeg',
        },
        {
            url: '/thepyo2.jpg',
            width: 900,
            height: 800,
            alt: 'Viện thẩm mỹ The Pyo',
            type: 'image/jpeg',
        },
        {
            url: '/thepyo3.jpg',
            width: 900,
            height: 800,
            alt: 'Viện thẩm mỹ The Pyo',
            type: 'image/jpeg',
        },
    ]
}) {
    return (
        <NextSeo
            title={title}
            description={description}
            canonical={globalConfig.home_url}
            openGraph={{
                url: url,
                title: title,
                description: description,
                images: images,
                siteName: globalConfig.site_name,
            }}
            twitter={{
                handle: '@thepyo',
                site: '@ThePyo',
                cardType: 'summary_large_image',
            }}
            themeColor={theme.palette.primary.main}
        />
    )
}