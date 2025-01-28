"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/material';

export default ({ sliderComponents }: any) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            direction={'vertical'}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {sliderComponents && sliderComponents.map((sliderComponent, index) => {
                const SlideComponent = sliderComponent.component
                return (
                    <SwiperSlide key={`home-swipper-${index}`}>
                        <Box >
                            <SlideComponent />
                        </Box>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
};