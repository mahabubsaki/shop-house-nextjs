import CartLayout from '@/layouts/CartLayout';
import { priceModifier } from '@/utils/price_modifier';
import { Checkbox, Input, Radio, RadioGroup, Select, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';
import fs from 'fs';
import { GetStaticProps } from 'next';
import { BiRightArrowAlt } from 'react-icons/bi';
import { tempMyWishlist } from '@/utils/constants';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';

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



const Cart = ({ data }: PropsType) => {
    const [edit, setEdit] = useState(false);
    const [cartData, setCartData] = useState([{ id: 1, img: 'https://i.ibb.co/PY9S90F/product-6.jpg', quantiy: 1, name: 'Men Black Gentle Belt', price: 88 }, { id: 2, img: 'https://i.ibb.co/7jvbjVX/product-7.jpg', quantiy: 1, name: 'Brown-Black Men Casual Glasses', price: 75 }, { id: 3, img: 'https://i.ibb.co/bXXWRP3/product-8.jpg', quantiy: 1, name: 'Black Men Casual Glasses', price: 79 }]);
    const handleCartQuantity = (quantity: number, id: number, index: number, operation: 'plus' | 'minus'): void => {
        const copyCartState = [...cartData];
        if (quantity === 0 && operation === 'minus') {
            setCartData(pre => pre.filter(item => item.id !== id));
            return;
        }
        const currentProduct = copyCartState.find(item => item.id === id);
        if (currentProduct) {
            currentProduct.quantiy = quantity;
            copyCartState.splice(index, 1, currentProduct);
            setCartData(copyCartState);
        }

    };
    return (
        <>
            <Head>
                <title>{`Cart | SHOP House`}</title>
                <meta name='description' content={`Shop till you drop with our e-commerce platform! Review your shopping cart and checkout with ease. Enjoy secure payment and fast delivery options. Start shopping today!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <CartLayout route='cart'>
                <div className='flex flex-col lg:flex-row gap-[20px] mt-10'>
                    <div className='cart-table w-[100%] lg:w-[67%]'>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead borderBottom={'1px'}>
                                    <Tr>
                                        <Th><p className='text-[#222529] text-[14px] font-bold text-center ml-16'>PRODUCT</p></Th>
                                        <Th><p className='text-[#222529] text-[14px] font-bold text-center'>PRICE</p></Th>
                                        <Th><p className='text-[#222529] text-[14px] font-bold text-center'>QUANTITY</p></Th>
                                        <Th><p className='text-[#222529] text-[14px] font-bold text-center'>SUBTOTAL</p></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {cartData.map((item, index) => <Tr key={index} borderTop={'1px'} borderColor='#E7E7E7'>
                                        <Td>
                                            <div className='py-[19px] flex items-center gap-4'>
                                                <figure className='relative'>
                                                    <Image src={item.img} alt='product-image' className='' width={80} height={80} />
                                                    <span className='absolute h-[20px] group w-[20px] rounded-full bg-white shadow-[0_2px_6px_0px_rgb(0,0,0,0.5)] top-[-10px] right-[-10px] flex justify-center items-center cursor-pointer'><MdClose className='group-hover:text-[#0088CC] duration-500' /></span>
                                                </figure>
                                                <p title={item.name} className='text-center w-full truncate text-[#222529] text-[14px]'>{item.name}</p>

                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='py-[19px] text-center'>
                                                <p className='text-center w-full truncate text-[#777] text-[14px]'>${priceModifier(item.price)}</p>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='py-[19px]'>
                                                <div className='flex justify-center border border-[#E7E7E7]text-center'>
                                                    <div onClick={() => handleCartQuantity(item.quantiy + 1, item.id, index, 'plus')} className='flex justify-center items-center text-center w-full text-base px-2 cursor-pointer hover:text-[#08c] duration-500'>
                                                        +
                                                    </div>
                                                    <div className='py-[10px] border-x border-[#E7E7E7]'>
                                                        <span className='w-[38px]  h-[28px] flex justify-center items-center text-base font-bold '>
                                                            {item.quantiy}
                                                        </span>
                                                    </div>
                                                    <div onClick={() => handleCartQuantity(item.quantiy - 1, item.id, index, 'minus')} className='flex justify-center items-center text-center w-full text-base px-2 cursor-pointer hover:text-[#08c] duration-500'>
                                                        -
                                                    </div>
                                                </div>

                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='py-[19px] text-center text-[#222529] text-base'>
                                                <p>${priceModifier(item.price * item.quantiy)}</p>
                                            </div>
                                        </Td>
                                    </Tr>)}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className='side-total-cart w-[75%] mx-auto lg:w-[33%] border-2 border-[#E7E7E7] px-[30px] pt-[24px] pb-[34px]'>
                        <p className='text-base font-bold mb-6 text-[#222529]'>CART TOTALS</p>
                        <div className='border-b border-[#DCDCDC] px-[10px] flex justify-between items-center pb-[10px]'>
                            <p className='text-[#222529] text-[14px] font-semibold'>Subtotal</p>
                            <p className='text-[#777] text-[14px] relative top-[-2px]'>${priceModifier(17.50)}</p>
                        </div>
                        <div className='p-[10px]'>

                            <form autoComplete='new-password' onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-[15px] mb-8'>
                                <p className='text-[#222529] text-[14px] font-semibold'>Shipping</p>
                                <RadioGroup display={'flex'} flexDirection={'column'} defaultValue='Standard Shipping'>
                                    {['Standard Shipping', 'Express Shipping', 'In-Store Pickup'].map((item) => <Radio isDisabled={edit} key={item} size='lg' name='1' value={item} colorScheme='blue'>
                                        <span className='text-[14px] text-[#777]'>{item}</span>
                                    </Radio>)}
                                </RadioGroup>
                                <p className='text-[14px] text-[#777]'>Shipping to :</p>
                                <Select isDisabled={edit} focusBorderColor='#E2E8F0' color={'option.400'} name='state' fontSize={'sm'}>
                                    {data.states.map((item) => <option key={item.abbreviation} className='text-[#777]' value={item.abbreviation}>{item.name} ({item.abbreviation})</option>)}
                                </Select>
                                <Input type="text" autoComplete="new-password" isDisabled={edit} focusBorderColor='#E2E8F0' name='town' fontSize={'sm'} color={'option.400'} placeholder='TOWN / CITY' />
                                <Input type="text" autoComplete="new-password" isDisabled={edit} focusBorderColor='#E2E8F0' name='zip' fontSize={'sm'} color={'option.400'} placeholder='ZIP' />
                                <div className='flex flex-col gap-3'>


                                    {edit ? <button onClick={() => setEdit(false)} className='bg-[#222529] hover:bg-[#34393f] text-white hover:text-white duration-500 px-[25px] leading-10 text-[13px] font-bold'>Edit Address</button> : <>
                                        <Checkbox name='profileUpdate'><span className='text-[12.5px] text-[#777] md:text-[14px]'>Update to profile</span></Checkbox>
                                        <button
                                            className='bg-[#F4F4F4] hover:bg-[#08C] text-inherit hover:text-white duration-500 px-[25px] leading-10 text-[13px] font-bold' onClick={() => setEdit(true)}>Update Address</button>
                                    </>}
                                </div>

                            </form>
                            <div className='border-t border-[#DCDCDC] px-[10px] flex justify-between items-center pt-[12px] pb-[15px]'>
                                <p className='text-base text-[#222529] font-semibold relative top-1'>Total</p>
                                <p className='text-[22px] text-[#222529] font-semibold'>${priceModifier(17.90)}</p>
                            </div>
                            <button className='bg-[#222529] py-[15px] mt-[26px] hover:bg-[#34393f] w-full text-white hover:text-white items-center justify-center flex gap-3 duration-500 px-[25px] leading-5 text-[15px] font-bold'><span>PROCEED TO CHECKOUT</span><BiRightArrowAlt className='text-white text-2xl font-bold' /></button>
                        </div>
                    </div>
                </div>
            </CartLayout>
        </>
    );
};

export default Cart;