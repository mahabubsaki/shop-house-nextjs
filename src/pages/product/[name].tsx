import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import UserLayout from '@/layouts/UserLayout';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import styles from '@/styles/SingleProductPage.module.css';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { priceModifier } from '@/utils/price_modifier';
import { HiOutlineShoppingBag } from 'react-icons/hi';

SwiperCore.use([Navigation]);
export const getServerSideProps: GetServerSideProps<{ name: string; }> = async (context) => {
    const { name } = context.query;
    return {
        props: {
            name: name + '',
        }
    };
};

const SingleProductPage = ({ name }: { name: string; }) => {
    const data = {
        img: ['https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-1-big.jpg', 'https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg', 'https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-3-big.jpg', 'https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-4-big.jpg', 'https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-5-big.jpg'],
        reviews: 6,
        price: 1999,
        discount: 15,
        sku: 654613612,
        category: 'shoes',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    };
    const [imageIndex, setImageIndex] = useState(0);
    const [quantity, setQuantiy] = useState(1);
    const [mySwiper, setMySwiper] = useState<SwiperCore | null>(null);


    return (
        <>
            <Head>
                <title>{`${name} | SHOP House`}</title>
                <meta name='description' content={`Buy the ${name} today! This high-quality widget is made from durable materials and comes with a lifetime guarantee. Order now and enjoy fast, free shipping.`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <UserLayout>
                <div className='max-w-[1200px] mx-auto'>
                    <BreadCrumpNavigator paths={['PRODUCTS']} />
                    <div className='flex flex-col md:flex-row'>
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
                                        <img src={data.img[index]} alt="product-image" />
                                    </SwiperSlide>)}
                                </Swiper>
                            </div>
                            <div className='pt-2 w-full h-[115px]'>
                                <Swiper navigation slidesPerView={4} spaceBetween={8} className='w-full h-full'>
                                    {new Array(5).fill(0).map((_, index) => <SwiperSlide key={index} onClick={() => {
                                        setImageIndex(index);
                                        mySwiper && mySwiper.slideTo(index);
                                    }} className={`w-[25%] h-full cursor-pointer  ${imageIndex === index ? 'border-2 border-[#21293C]' : 'p-[2px]'}`}>
                                        <img src={data.img[index]} alt="product-image" className={`w-full h-full`} />

                                    </SwiperSlide>)}
                                </Swiper>
                            </div>
                        </div>
                        <div className='w-full md:w-[59%] px-[10px]'>
                            <div>
                                <h1 className='text-[27px] leading-9 md:text-[30] font-bold mb-[11px]'>{name}</h1>
                                <div className='flex gap-[10px]'>
                                    <div className='flex'>
                                        {new Array(5).fill(0).map((_, index) => <AiFillStar key={index} className='text-lg text-[#FD5B5A]' />)}
                                    </div>
                                    <p className='text-[#999999] text-[14px]'>({data.reviews} reviews)</p>
                                </div>
                                <div className='my-[22px] w-[40px] h-[0] border-t-2 border-[#e7e7e7]'></div>
                                <div className='mb-[23px]'>
                                    {data.discount ? <div className='flex gap-2 items-center'>
                                        <p className='text-[17px] align-middle relative top-[6px] text-[#a7a7a7] line-through font-semibold md:text-[19px]'>{priceModifier(data.price)}</p>
                                        <p className='text-[21.5px] md:text-[24px] text-[#222529] font-semibold'>{priceModifier(Math.round(data.price - data.price * (data.discount / 100)))}</p>
                                    </div> : <p>{priceModifier(data.price)}</p>}
                                </div>
                                <p className='mb-[15px] text-[#777777] text-[14.5px] md:text-base'>{data.description}</p>
                                <ul className='text-[11.8px] mb-[10px] flex flex-col gap-[10px] md:text-[12px] uppercase leading-[18px]'>
                                    <li>SKU: <strong className='text-[#222529]'>{data.sku}</strong></li>
                                    <li>Category: <strong className='text-[#222529]'>{data.category}</strong></li>
                                </ul>
                                <div className='border-t border-b border-[#E7E7E7] flex py-[15px]'>
                                    <div className='flex items-center text-[14px] md:text-[16px] my-[5px] mr-[5px]'>
                                        <button onClick={() => setQuantiy(qty => qty + 1)} className='h-[48px] border py-[11px] px-[15px]'>+</button>
                                        <span className='h-[48px] border py-[11px] px-[20px] font-bold relative'><span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{quantity}</span></span>
                                        <button onClick={() => setQuantiy(qty => {
                                            if (qty > 1) return qty - 1;
                                            return qty;
                                        })} className='h-[48px] border py-[11px] px-[15px]'>-</button>
                                    </div>
                                    <button className='mx-[5px] flex items-center h-[48px] relative top-[4.5px] px-[26.5px] hover:bg-[#34393f] duration-500 bg-[#222529] text-white gap-1 font-bold text-[14px]'>
                                        <HiOutlineShoppingBag className='text-2xl' />
                                        <span className='relative top-[1px]'>ADD TO CART</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
};

export default SingleProductPage;