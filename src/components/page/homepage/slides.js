import { Box, Button, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image";
import { globalConfig } from "@/theme/config";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import FormHomepage from "@/components/form/formHomepage";
import { imageCdn } from "@/components/ui/imaWithCdn";
import ButtonCallToActionMobile from "./buttonCallToActionMobile";
import SlideItem from "./slideItem";

export default function SlideSection({slides, homePageData}){

    const matches = useMediaQuery('(min-width:1650px)');

    const isMobile = useMediaQuery('(max-width:900px)');

    const homepageTags = homePageData?.attributes?.homepage_tags

    const slide_mobile = homePageData.attributes.slide_mobile

    return(
        <Box position={"relative"} minHeight={{
            xs: 350,
            lg: 900
        }}>
            <Swiper 
                pagination={true} 
                navigation={isMobile ? false : true}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]} 
                className="mySwiper"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {!isMobile && slides.map((item,index) => (
                    <SwiperSlide key={index}>
                        <Stack position={"relative"} sx={{width: '100vw', height: isMobile ? "400px" : "668px"}} justifyContent={"center"}>
                            <Box position={"absolute"} top={0} left={0} right={0} bottom={0} zIndex={0}>
                                <Image 
                                    src={imageCdn(item?.attributes?.image?.data?.attributes?.url)}
                                    width={1920} 
                                    height={668} 
                                    alt="" 
                                    style={{
                                        width: '100vw',
                                        height: isMobile ? "400px" : "668px",
                                        objectFit:'cover',
                                        objectPosition: 'center'
                                    }}
                                    priority
                                />
                            </Box>
                            
                        </Stack>
                    </SwiperSlide>
                ))}

                {isMobile && slide_mobile?.map(item =>
                    <SwiperSlide key={item.id}>
                        <Box>
                            <Image 
                                src={imageCdn(item?.image?.data?.attributes?.url)}
                                width={item?.image?.data?.attributes?.width || 500} 
                                height={item?.image?.data?.attributes?.height || 300} 
                                alt="" 
                                style={{
                                    width: '100vw',
                                    height: "400px",
                                    objectFit:'cover',
                                    objectPosition: 'center'
                                }}
                                priority
                            />
                        </Box>
                    </SwiperSlide>
                )}
            </Swiper>
            <ButtonCallToActionMobile />
            <Stack 
                display={{xs: "none", lg: "block"}}
                position={"absolute"} 
                bottom={30} 
                left={0} 
                right={0} 
                justifyContent={"center"} 
                alignItems={"center"} 
                zIndex={1}
            >
                <Container maxWidth={globalConfig.maxWidth}>
                    <Stack direction={"row"} alignItems={"center"} spacing={0}>

                        {homepageTags?.map((item,key) => <SlideItem 
                            key={key} 
                            bgcolor={Boolean(key % 2) ? "#0f3c85" : "primary.main"}
                            title={item.title}
                            description={item.description}
                        />)}

                    </Stack>
                </Container>
            </Stack>
        </Box>
    )
}