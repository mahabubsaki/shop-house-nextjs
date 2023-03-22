import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsCartPlus, BsHeart } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

const HomeSingleProduct = ({ item: { category, discount, image, isHot, name, price, rating }, delay, isFeatured, isNewArrival, section }: {
    item: {
        name: string,
        category: string,
        isHot: boolean,
        discount: number,
        image: string[],
        rating: number,
        price: number,
    }, delay: number, isFeatured?: boolean, isNewArrival?: boolean, section?: string;
}) => {
    const [figImg, setFigImg] = useState(false);

    return (
        <div className={`${((section === 'new' && isNewArrival) || (section === 'featured' && isFeatured)) && `animate__fadeInLeft animate__animated animate__delay-${delay}s`}  w-full shadow-none duration-500 hover:shadow-[0_12px_20px_0_rgba(0,0,0,0.08)]`} onMouseEnter={() => {
            setFigImg(true);
        }} onMouseLeave={() => {
            setFigImg(false);
        }}>
            <figure className='w-full cursor-pointer aspect-[1/1] relative rounded-lg mb-4'>
                <div className='w-full h-full relative'>
                    <Image src={image[0]} fill alt="product-image-1" className={`w-full ${figImg ? 'opacity-0' : 'opacity-100'} object-cover z-[3] h-full rounded-lg relative duration-500`} />
                    <Image src={image[1]} fill className='w-full object-cover z-[2] h-full rounded-lg duration-500 absolute inset-0' alt="product-image-2" />
                </div>


                <div className='absolute top-2 z-[20] left-2'>
                    {isHot ? <div className=' text-[10px] text-white font-semibold leading-[10px] bg-[#2ba968] rounded-[12px] mb-1 py-[5px] px-[12px]'>HOT</div> : null}
                    {discount ? <div className=' text-[10px] text-white font-semibold leading-[10px] bg-[#da5555] rounded-[12px] mb-1 py-[5px] px-[12px]'>-{discount}%</div> : null}
                </div>
                <div className='absolute top-2 right-2 z-[20] text-2xl block xs:hidden'>
                    <BsHeart />
                </div>
            </figure>
            <div className='px-2 flex flex-col items-center text-center'>
                <p className='uppercase text-[9px] md:text-[10px] hover:text-[#08c] duration-500 cursor-pointer text-[#777]'>CATEGORY : {category}</p>
                <p title={name} className='text-[13.5px] hover:text-[#08c] duration-500 cursor-pointer truncate w-full md:text-[15px] text-[#222529]'>{name}</p>
                <div className='mb-3 flex'>
                    {new Array(rating).fill(0).map((item, i) => <AiFillStar key={i} className='text-[#6E7F80]' />)}
                    {new Array(5 - rating).fill(0).map((item, i) => <AiOutlineStar key={i} className='text-[#00000029]' />)}
                </div>
                <div className='flex gap-1 mb-[14px] items-center'>
                    {discount ? <span className={`text-[12.5px] text-[#999999] decoration-[#999999] md:text-[14px] line-through`}>${price.toFixed(2)}</span> : null}
                    {discount ? <span className='text-[#222529] text-[16px] md:text-[18px] font-semibold'>${(price - price * (discount / 100)).toFixed(2)}</span> : null}
                    {!discount ? <span className='text-[#222529] text-[16px] md:text-[18px] font-semibold'>${price.toFixed(2)}</span> : null}
                </div>
                <div className='mb-4 items-stretch flex'>
                    <button title='Add To Wishlist' className={`${!figImg ? '-right-[40px] opacity-0' : '-right-0 opacity-100'} w-[36px] text-[#6f6e6b] hover:text-[#333] hidden xs:flex justify-center items-center duration-500 bg-[#F4F4F4] h-[36px] text-[14px] relative `}>
                        <BsHeart />
                    </button>
                    <button className={`${!figImg ? 'bg-[#F4F4F4] w-auto truncate duration-500 text-[#6F6E6B]' : 'bg-[#2B2B2D] z-[2] text-white'} border duration-500 border-[#f4f4f4] leading-[34px]   px-[12px] flex items-center md:px-[14px] text-[10.5px] md:text-[12px] font-semibold cursor-pointer gap-[2px]`}>
                        {figImg && <BsCartPlus className='text-xl' />}
                        <span>ADD TO CART</span>
                    </button>
                    <button title='View Product Details' className={`${!figImg ? '-left-[40px] opacity-0' : '-left-0 opacity-100'} w-[36px] text-[#6f6e6b] duration-500 hover:text-[#333] hidden xs:flex justify-center items-center bg-[#F4F4F4] h-[36px] text-[14px] relative `}>
                        <FiExternalLink />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeSingleProduct;