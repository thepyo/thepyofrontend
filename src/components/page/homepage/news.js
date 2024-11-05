import DefaultTitleSection from "@/components/ui/title";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, useMediaQuery } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import NewsWidget from "@/components/news/widgets";
import { imageCdn } from "@/components/ui/imaWithCdn";

export default function News({datas}) {
    const mobile = useMediaQuery('(max-width:720px)');
    return (
        <Box py={8} bgcolor={"#F2F2F2"}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Stack spacing={2} mb={3}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <DefaultTitleSection title="TIN TỨC - CHƯƠNG TRÌNH KHUYẾN MẠI" />
                    </Stack>
                </Stack>
                <Swiper
                    slidesPerView={mobile ? 1 : 4}
                    spaceBetween={30}
                    modules={[Pagination, Autoplay]}
                    className="news-slide"
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                >
                    {datas.map((item, index) => (
                        <SwiperSlide key={index}>
                            <NewsWidget 
                                thumbnail = {imageCdn(item?.attributes?.thumbnail?.data?.attributes?.url)}
                                title = {item?.attributes?.title}
                                description = {item?.attributes?.description}
                                time = {item?.attributes?.createdAt}
                                link={`/${item?.attributes?.slug}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                
            </Container>
        </Box>
    )
}