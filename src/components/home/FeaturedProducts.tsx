import React, { useRef } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { homeProductsFeatured, newArrival } from '@/utils/constants';
import { Navigation } from 'swiper';
import "swiper/css/navigation";
import HomeSingleProduct from '../common/map/HomeSingleProduct';
import { useInView } from 'framer-motion';

const FeaturedProducts = () => {
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
    const featuredRef = useRef(null);
    const newArrivalRef = useRef(null);
    const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0 });

    const isNewArrivalInView = useInView(newArrivalRef, { once: true, amount: 0 });

    return (
        <>
            <div className='pt-[50px] pb-[22px] md bg-[#fbfbfb]'>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='px-[10px] mb-[20px]'>
                        <p className="flex items-center mx-0 xl:-mx-[20px]">
                            <span className="border-t block border-[#0000001a] flex-grow mr-[15px]"></span>
                            <span className={`font-bold text-[16px] md:text-[18px]`}>FEATURED PRODUCTS</span>
                            <span className="border-t block border-[#0000001a] flex-grow ml-[15px]"></span>
                        </p>
                    </div>
                    <div ref={featuredRef} className='px-[20px] py-[10px] mx-0 my-0 xl:-mx-[20px] xl:-my-[10px]'>
                        <Swiper navigation={true} modules={[Navigation]} breakpoints={breakpoints}>
                            {homeProductsFeatured.map((item, i) => <SwiperSlide className='mb-[20px]' key={i}>
                                <HomeSingleProduct item={item} key={i} delay={i} isFeatured={isFeaturedInView} section='featured' />
                            </SwiperSlide>)}

                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='pt-[50px] pb-[22px] md bg-white'>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='px-[10px] mb-[20px]'>
                        <p className="flex items-center mx-0 xl:-mx-[20px]">
                            <span className="border-t block border-[#0000001a] flex-grow mr-[15px]"></span>
                            <span className={`font-bold text-[16px] md:text-[18px]`}>NEW ARRIVALS</span>
                            <span className="border-t block border-[#0000001a] flex-grow ml-[15px]"></span>
                        </p>
                    </div>
                    <div ref={newArrivalRef} className='px-[20px] py-[10px] mx-0 my-0 xl:-mx-[20px] xl:-my-[10px]'>
                        <Swiper navigation={true} modules={[Navigation]} breakpoints={breakpoints}>
                            {newArrival.map((item, i) => <SwiperSlide className='mb-[20px]' key={i}>
                                <HomeSingleProduct item={item} key={i} delay={i} isNewArrival={isNewArrivalInView} section='new' />
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedProducts;