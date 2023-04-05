import CartLayout from '@/layouts/CartLayout';

import { priceModifier } from '@/utils/price_modifier';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import fs from 'fs';
import { FcOk } from 'react-icons/fc';
import ShippingBillingForm from '@/components/shared/ShippingBillingForm';

type DataType = {
    abbreviation: string;
    name: string;
};

type PropsType = {
    data: {
        states: DataType[];
    };
};

export const getStaticProps: GetStaticProps<PropsType> = async () => {
    const { states } = JSON.parse(fs.readFileSync('public/states.json', 'utf8')) as { states: DataType[]; };

    return {
        props: {
            data: {
                states,
            },
        },
    };
};


const Checkout = ({ data }: PropsType) => {
    const cartData = [{ id: 1, img: 'https://i.ibb.co/PY9S90F/product-6.jpg', quantiy: 1, name: 'Men Black Gentle Belt', price: 88 }, { id: 2, img: 'https://i.ibb.co/7jvbjVX/product-7.jpg', quantiy: 1, name: 'Brown-Black Men Casual Glasses', price: 75 }, { id: 3, img: 'https://i.ibb.co/bXXWRP3/product-8.jpg', quantiy: 1, name: 'Black Men Casual Glasses', price: 79 }];
    const [doneCheckout, setDoneCheckout] = useState(false);
    return (
        <>
            <Head>
                <title>{`${!doneCheckout ? 'Checkout' : 'Order Complete'} | SHOP House`}</title>
                <meta name='description' content={`Shop till you drop with our e-commerce platform! Review your shopping cart and checkout with ease. Enjoy secure payment and fast delivery options. Start shopping today!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            {
                !doneCheckout ? <CartLayout route='checkout'>
                    <div className='flex flex-col justify-start items-start lg:flex-row gap-[20px] mt-10'>
                        <div className='checkout-form w-[100%] lg:w-[60%] px-[25px] lg:px-0'>
                            <ShippingBillingForm data={data} />
                        </div>
                        <div className='side-checkout-card w-[85%] mx-auto lg:w-[40%] border-2 border-[#E7E7E7] px-[32px] pt-[28px] pb-[31px]'>
                            <p className='text-base font-bold mb-[20px]'>YOUR ORDER</p>
                            <div className='p-[10px] mb-[36px]'>
                                <p className='text-[#222529] text-[14px] font-bold pb-[10px] border-b border-[#e7e7e7]'>PRODUCTS</p>
                                {cartData.map(item => <div key={item.id} className='py-[14px] px-[10px] flex justify-between items-center text-[14px] gap-[40px] text-[#222529]'>
                                    <p className='flex items-center w-full '>{item.name} x {item.quantiy}</p>
                                    <p className='relative -top-1'>${priceModifier(item.quantiy * item.price)}</p>
                                </div>)}
                                <div className='pt-[30px] pb-[13px] border-b border-[#e7e7e7] flex justify-between items-center'>
                                    <p className='text-[14px] font-semibold'>SUBTOTAL</p>
                                    <p className='relative -top-1'>${priceModifier(cartData.reduce((pre, cur) => pre + (cur.price * cur.quantiy), 0))}</p>
                                </div>
                                <div className='pb-[20px] border-b border-[#e7e7e7]'>
                                    <p className='text-[#222529] text-[14px] font-semibold my-[14px]'>Shipping</p>
                                    <RadioGroup display={'flex'} flexDirection={'column'} defaultValue='Standard Shipping'>
                                        {['Standard Shipping', 'Express Shipping', 'In-Store Pickup'].map((item) => <Radio key={item} size='lg' name='1' value={item} colorScheme='blue'>
                                            <span className='text-[14px] text-[#777]'>{item}</span>
                                        </Radio>)}
                                    </RadioGroup>

                                </div>
                                <div className='py-[13px] border-b border-[#e7e7e7] flex justify-between items-center'>
                                    <p className='text-[14px] font-semibold'>DELIVERY FEE</p>
                                    <p className='relative -top-1'>${priceModifier(50)}</p>
                                </div>
                                <div className='pt-[18px] pb-[23px] flex justify-between items-center border-b border-[#e7e7e7]'>
                                    <p className='text-[#222529] text-base font-semibold'>TOTAL</p>
                                    <p className='text-[#222529] text-[22px] font-bold'>${priceModifier((cartData.reduce((pre, cur) => pre + (cur.price * cur.quantiy), 0)) + 50)}</p>
                                </div>
                            </div>
                            <button onClick={() => setDoneCheckout(true)} className='bg-[#222529] hover:bg-[#34393f] text-white hover:text-white duration-500 w-full p-[14px] leading-5 text-[14px] font-bold'>PLACE ORDER</button>
                        </div>
                    </div>
                </CartLayout> :
                    <CartLayout route='order-complete'>
                        <div className='px-[50px] py-[90px] flex flex-col items-center'>
                            <FcOk className='text-8xl mb-5' />
                            <p className='my-2 text-2xl text-[#222529] font-medium'>Successfully Placed The Order</p>
                            <p className='text-[14px] text-[#222529] text-center'><b>Order number: #2017182818</b>, Please confirm the order within 7 days.Otherwise your order will be canceled.</p>
                            <div className='mt-6 flex gap-4'>
                                <button className='bg-[#F4F4F4] hover:bg-[#08C] text-inherit hover:text-white duration-500 px-[25px] leading-10 text-[13px] font-bold'>Browse Products</button>
                                <button className='bg-[#222529] hover:bg-[#34393f] text-white hover:text-white duration-500 px-[25px] leading-10 text-[13px] font-bold'>My Order History</button>
                            </div>
                        </div>
                    </CartLayout>
            }
        </>
    );
};

export default Checkout;