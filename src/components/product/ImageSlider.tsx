import React, { useState } from 'react';
import styles from '@/styles/SingleProductPage.module.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const ImageSlider = ({ img }: { img: string[]; }) => {
    const [imageIndex, setImageIndex] = useState(0);

    const [mySwiper, setMySwiper] = useState<SwiperCore | null>(null);
    return (
        <div className='w-full md:w-[41%] px-[10px]'>
            <div className={`w-full aspect-square ${styles.container}`} >
                <Swiper onSwiper={(swiper) => {
                    setMySwiper(swiper);

                }} onSlideChange={(swiper) => setImageIndex(swiper.realIndex)} grabCursor={true}
                    effect={"creative"}
                    loop
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-120%", 0, -500],
                        },
                        next: {
                            shadow: true,
                            translate: ["120%", 0, -500],
                        },
                    }} modules={[Navigation]} className='w-full h-full' style={{ userSelect: 'none' }}>
                    {new Array(5).fill(0).map((_, index) => <SwiperSlide key={index} className='w-full h-full'>
                        <img src={img[index]} alt="product-image" />
                    </SwiperSlide>)}
                </Swiper>
            </div>
            <div className='pt-2 w-full h-[115px]'>
                <Swiper navigation slidesPerView={4} spaceBetween={8} className='w-full h-full'>
                    {new Array(5).fill(0).map((_, index) => <SwiperSlide key={index} onClick={() => {
                        setImageIndex(index);
                        mySwiper && mySwiper.slideTo(index);
                    }} className={`w-[25%] h-full cursor-pointer  ${imageIndex === index ? 'border-2 border-[#21293C]' : 'p-[2px]'}`}>
                        <img src={img[index]} alt="product-image" className={`w-full h-full`} />

                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageSlider;