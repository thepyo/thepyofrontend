// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import OurTeamWidget from '@/components/teams/widget';
import { useMediaQuery } from '@mui/material';
import { imageCdn } from '@/components/ui/imaWithCdn';

export default function SlideDoctorRelate({datas}){

    const mobile = useMediaQuery('(max-width:720px)');

    return(
        <Swiper
            slidesPerView={mobile ? 1 : 3}
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
                    <OurTeamWidget
                        title={item?.attributes?.title}
                        description={item?.attributes?.description}
                        thumbnail={imageCdn(item?.attributes?.thumbnail?.data?.attributes?.url)}
                        link={`/doi-ngu/${item?.attributes?.slug}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}