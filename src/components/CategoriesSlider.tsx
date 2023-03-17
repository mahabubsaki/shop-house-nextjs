import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { categories } from '@/utils/constants';
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import styles from '@/styles/CategoriesSlider.module.css';
import { useInView } from 'framer-motion';
import Image from 'next/image';
SwiperCore.use([Navigation, Autoplay]);




const CategoriesSlider = () => {
    const [isLastSlide, setIsLastSlide] = useState(false);
    const swiperRef = useRef<SwiperCore>();
    const swiperWrapperDiv = useRef<HTMLDivElement>(null);
    const isCategoryInView = useInView(swiperWrapperDiv, { once: true, amount: 0 });
    const startSwipper = (e: MouseEvent) => swiperRef.current && swiperRef.current.autoplay.start();
    const stopSwipper = (e: MouseEvent) => swiperRef.current && swiperRef.current.autoplay.stop();
    useEffect(() => {
        if (!isCategoryInView) return;
        let timeId: NodeJS.Timeout;
        const targetDiv = swiperWrapperDiv.current;
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
            timeId = setTimeout(() => {
                swiperRef.current?.autoplay.start();
                targetDiv?.addEventListener('mouseleave', startSwipper);
                targetDiv?.addEventListener('mouseenter', stopSwipper);
            }, (categories.length * 1000));
        }
        return () => {
            clearTimeout(timeId);
            targetDiv?.removeEventListener('mouseleave', startSwipper);
            targetDiv?.removeEventListener('mouseleave', stopSwipper);
        };
    }, [isCategoryInView]);
    return (
        <div className='pb-[40px]'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='mb-[45px]'>
                    <p className="flex items-center mx-0 xl:-mx-[20px]">
                        <span className="border-t block border-[#0000001a] flex-grow mr-[15px]"></span>
                        <span className={`font-bold text-[16px] md:text-[18px]`}>BROWSE OUR CATEGORIES</span>
                        <span className="border-t block border-[#0000001a] flex-grow ml-[15px]"></span>
                    </p>
                </div>
                <div ref={swiperWrapperDiv}>
                    <Swiper onSlideChange={(swiper) => {
                        if (swiper.realIndex === categories.length - 1) setIsLastSlide(true);
                        if (swiper.realIndex === 0) setIsLastSlide(false);
                    }} modules={[Navigation]} onInit={(swiper) => swiperRef.current = swiper}
                        autoplay={isCategoryInView ? {
                            delay: 500,
                            reverseDirection: isLastSlide
                        } : undefined} speed={2000} navigation={true} effect={'coverflow'}
                        breakpoints={{
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
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20
                            }
                        }}>
                        {categories.map((item, i) => <SwiperSlide className='mb-[20px]' key={i}>
                            <div className={`w-full  shadow-none duration-500 hover:shadow-[0_12px_20px_0_rgba(0,0,0,0.08)] ${styles.parent} cursor-pointer ${isCategoryInView && `animate__fadeInUp animate__animated animate__delay-${i}s`}`}>
                                <figure className={`w-full aspect-[1/1] ${styles.fig}`}>
                                    <div className='w-full h-full relative'>
                                        <Image src={item.img} fill alt="categoty-image" className='object-cover w-full h-full absolute inset-0' />
                                    </div>
                                </figure>
                                <div className='p-[20px] flex flex-col items-center text-[#1D2127]'>
                                    <p className='uppercase text-[13.5px] md:text-[15px] font-bold mb-[10px]'>{item.name}</p>
                                    <span className='text-[10px] opacity-70 uppercase'>{item.quantity} Products</span>
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default CategoriesSlider;