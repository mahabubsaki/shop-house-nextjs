import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { priceModifier } from '@/utils/price_modifier';
import { HiMail, HiOutlineShoppingBag } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import { ImFacebook, ImLinkedin2, ImTwitter } from 'react-icons/im';
import { FaGooglePlusG } from 'react-icons/fa';

const ProductInformation = ({ name, reviews, discount, price, description, sku, category }: { name: string, reviews: number, discount: number, price: number, description: string, sku: string, category: string; }) => {

    const [quantity, setQuantiy] = useState(1);
    return (
        <div className='w-full md:w-[59%] px-[10px]'>
            <div>
                <h1 className='text-[27px] leading-9 md:text-[30] font-bold mb-[11px]'>{name}</h1>
                <div className='flex gap-[10px]'>
                    <div className='flex'>
                        {new Array(5).fill(0).map((_, index) => <AiFillStar key={index} className='text-lg text-[#FD5B5A]' />)}
                    </div>
                    <p className='text-[#999999] text-[14px]'>({reviews} reviews)</p>
                </div>
                <div className='my-[22px] w-[40px] h-[0] border-t-2 border-[#e7e7e7]'></div>
                <div className='mb-[23px]'>
                    {discount ? <div className='flex gap-2 items-center'>
                        <p className='text-[17px] align-middle relative top-[6px] text-[#a7a7a7] line-through font-semibold md:text-[19px]'>{priceModifier(price)}</p>
                        <p className='text-[21.5px] md:text-[24px] text-[#222529] font-semibold'>${priceModifier(Math.round(price - price * (discount / 100)))}</p>
                    </div> : <p className='text-[21.5px] md:text-[24px] text-[#222529] font-semibold'>${priceModifier(price)}</p>}
                </div>
                <p className='mb-[15px] text-[#777777] text-[14.5px] md:text-base'>{description.length > 300 ? description.slice(0, 300) + '...' : description}</p>
                <ul className='text-[11.8px] mb-[10px] flex flex-col gap-[10px] md:text-[12px] uppercase leading-[18px]'>
                    <li>SKU: <strong className='text-[#222529]'>{sku}</strong></li>
                    <li>Category: <strong className='text-[#222529]'>{category}</strong></li>
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
                <div className='mt-[7px] mb-[30px] flex items-center'>
                    <div className='mr-[5px] flex gap-1'>
                        <div className='h-[36px] my-1 w-[36px] hover:border-[#3b5a9a] rounded-full border-2 border-[#E7E7E7] flex items-center justify-center hover:bg-[#3b5a9a] text-[#222529] hover:text-white duration-500 cursor-pointer bg-transparent'>
                            <ImFacebook />
                        </div>
                        <div className='h-[36px] my-1 w-[36px] hover:border-[#1aa9e1] hover:bg-[#1aa9e1] rounded-full border-2 border-[#E7E7E7] flex items-center justify-center text-[#222529] hover:text-white duration-500 cursor-pointer bg-transparent'>
                            <ImTwitter />
                        </div>
                        <div className='h-[36px] my-1 w-[36px] hover:border-[#0073b2] hover:bg-[#0073b2] rounded-full border-2 border-[#E7E7E7] flex items-center justify-center text-[#222529] hover:text-white duration-500 cursor-pointer bg-transparent'>
                            <ImLinkedin2 />
                        </div>
                        <div className='h-[36px] my-1 w-[36px] hover:border-[#dd4b39] hover:bg-[#dd4b39] rounded-full border-2 border-[#E7E7E7] flex items-center justify-center text-[#222529] hover:text-white duration-500 cursor-pointer bg-transparent'>
                            <FaGooglePlusG className='text-lg' />
                        </div>
                        <div className='h-[36px] my-1 w-[36px] hover:border-[#f2a60c] hover:bg-[#f2a60c] rounded-full border-2 border-[#E7E7E7] flex items-center justify-center text-[#222529] hover:text-white duration-500 cursor-pointer bg-transparent'>
                            <HiMail className='text-lg' />
                        </div>
                    </div>
                    <div className='px-2 py-[17px] gap-1 cursor-pointer group font-bold flex items-center'>
                        <FiHeart className='text-xl duration-500 group-hover:text-[#08c]' />
                        <span className='text-[12px] duration-500 group-hover:text-[#08c]'>ADD TO WISHLIST</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;