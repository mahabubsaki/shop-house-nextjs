import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css/navigation";
import { homeProductsFeatured } from '@/utils/constants';
import HomeSingleProduct from '../common/map/HomeSingleProduct';

const RelatedProducts = () => {
    const breakpoints = {
        1: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    };
    return (
        <div className='my-[30px]'>
            <p className='text-base md:text-lg font-bold text-[#202529] pb-[10px] border-b border-b-[#E7E7E7]'>RELATED PRODUCTS</p>
            <div className='py-[30px] border-b border-b-[#E7E7E7]'>
                <Swiper navigation={true} modules={[Navigation]} breakpoints={breakpoints}>
                    {homeProductsFeatured.map((item, i) => <SwiperSlide className='mb-[20px]' key={i}>
                        <HomeSingleProduct item={item} key={i} />
                    </SwiperSlide>)}

                </Swiper>
            </div>
        </div>
    );
};

export default RelatedProducts;