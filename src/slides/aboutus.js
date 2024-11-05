import { Box, Stack } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image";
import { imageCdn } from "@/components/ui/imaWithCdn";

export default function SlideAboutUs({data}) {
    return (
        <Swiper
            pagination={true}
            navigation={false}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="slide-about-us"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <Stack position={"relative"} sx={{ width: '100%', height: "auto" }} justifyContent={"center"}>
                        <Image 
                            src={imageCdn(item?.attributes?.url)} 
                            width={800} height={500} alt="" style={{
                            width: '100%',
                            height: '420px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            borderRadius: '5px'
                        }} />
                    </Stack>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}