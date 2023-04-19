import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import Head from 'next/head';
import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import AboutUsBanner from '@/components/aboutus/AboutUsBanner';
import { FaShippingFast } from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';
import { MdSupportAgent } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from '@/components/common/map/TestimonialCard';
import { Autoplay } from 'swiper';

const AboutUs = () => {
    const shippingOptions = [
        {
            icon: <FaShippingFast className="text-6xl text-[#08c] mb-3" />,
            title: 'Free Shipping',
        },
        {
            icon: <AiOutlineDollar className="text-6xl text-[#08c] mb-3" />,
            title: '100% Money Back Guarantee'
        },
        {
            icon: <MdSupportAgent className="text-6xl text-[#08c] mb-3" />,
            title: 'Online Support 24/7'
        }
    ];
    const whyChooseUs = [
        {
            title: '2+',
            text: 'MILLION CUSTOMERS'
        },
        {
            title: '100+',
            text: 'TEAM MEMBERS'
        }, {
            title: "24HR",
            text: 'SUPPORT AVAILABLE',
        }, {
            title: '100+',
            text: 'PROUCTS AVAILABLE'
        }, {
            title: '99%',
            text: 'SATISFICTION RATE'
        }
    ];
    return (
        <>
            <Head>
                <title>{`About Us | SHOP House`}</title>
                <meta name='description' content={`Shop till you drop with our e-commerce platform! Review your shopping cart and checkout with ease. Enjoy secure payment and fast delivery options. Start shopping today!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="vercel.svg" />
            </Head>
            <UserLayout>
                <AboutUsBanner />
                <div className='max-w-[1200px] mx-auto px-[10px]'>
                    <BreadCrumpNavigator paths={['About-Us']} />
                    <div className='pt-[30px] pb-[45px]'>
                        <p className='text-[19px] leading-7 font-bold text-[#222529] mb-4'>OUR STORY</p>
                        <p className='text-[#7b858a] text-[14px] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam quia esse beatae, dolorem a ex. Neque atque dolorem deleniti laborum laudantium hic porro iusto ipsam reiciendis exercitationem, perspiciatis impedit consequuntur veritatis ipsa cupiditate quaerat, placeat iure ipsum. Similique, assumenda, nulla sapiente amet, quibusdam fuga sunt laborum laboriosam placeat iste tempora voluptate aut. Modi, laborum!</p>
                        <p className='text-[#7b858a] text-[14px] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi eos asperiores harum necessitatibus eaque dolores fuga nemo ipsum! Veniam praesentium repellat voluptatem, vel magni impedit officia hic dolorum? Nemo, quis? Soluta perferendis necessitatibus ipsa aut blanditiis deserunt, consequatur vero cum voluptate. Totam sunt adipisci quasi cumque nisi tenetur! Modi nihil exercitationem maxime placeat et saepe provident earum dignissimos eius optio debitis nobis sit in odio incidunt, eligendi accusamus nesciunt?</p>
                        <blockquote className='text-[#21293c] text-lg italic'>
                            &ldquo; Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model search for evolved over sometimes by accident, sometimes on purpose &rdquo;
                        </blockquote>
                    </div>
                </div>
                <div className='bg-[#f4f4f4] pt-[50px] pb-[20px]'>
                    <div className='max-w-[1200px] mx-auto px-[10px]'>
                        <p className='text-[19px] leading-7 font-bold text-[#222529] mb-4 uppercase'>Why Choose Us</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                            {shippingOptions.map(({ icon: Icons, title }) => <div className='bg-white px-[40px] py-[30px] mb-[40px]'>
                                {Icons}
                                <p className='text-[#21293c] text-lg font-semibold mb-3'>{title}</p>
                                <p className='text-[#7b858a] text-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, molestias. Voluptate ipsam alias quasi illo saepe dolorem, animi dolores nostrum porro doloribus repudiandae optio consequuntur, asperiores consequatur ad nihil tempore!</p>
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className='max-w-[1200px] mx-auto px-[10px]'>
                    <div className='pt-[50px] pb-[70px]'>
                        <p className='text-[#21293c] text-[19px] font-bold text-center mb-[52px]'>HAPPY CLIENTS</p>
                        <Swiper effect='coverflow' breakpoints={{
                            1: {
                                spaceBetween: 20,
                                slidesPerView: 1,
                            },
                            750: {
                                spaceBetween: 20,
                                slidesPerView: 2,
                            }
                        }} loop modules={[Autoplay]} className='cursor-grab' autoplay>
                            {new Array(5).fill(0).map(_ => <SwiperSlide>
                                <TestimonialCard />
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
                <div className='bg-[#f4f4f4] pt-[50px] pb-[24px]'>
                    <div className='max-w-[1200px] mx-auto px-[10px] mb-[40px] gap-x-5 gap-y-8 grid grid-flow-dense' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        {whyChooseUs.map(item => <div key={item.title} className='px-[10px]'>
                            <p className='mb-2 text-[#08c] text-[32px] font-bold'>{item.title}</p>
                            <p className='text-[#7b858a] text-[14px] font-semibold'>{item.text}</p>
                        </div>)}
                    </div>
                </div>
            </UserLayout>
        </>
    );
};

export default AboutUs;