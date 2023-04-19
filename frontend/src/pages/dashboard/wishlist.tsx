
import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import DashboardLayout from '@/layouts/DashboardLayout';
import UserLayout from '@/layouts/UserLayout';
import { tempMyWishlist } from '@/utils/constants';
import { priceModifier } from '@/utils/price_modifier';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdClose } from 'react-icons/md';

const WishList = () => {
    return (
        <>
            <Head>
                <title>{`WishList | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>

                <BreadCrumpNavigator paths={['dashboard', 'wishlist']} />
                <div>
                    <p className='my-[40px] text-[#222529] text-[27px] md:text-[30px] font-bold'>My Wishlist</p>
                    <div>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead borderBottom={'1px'}>
                                    <Tr>
                                        <Th><p className='text-[#222529] text-[14px] font-bold text-center ml-16'>PRODUCT</p></Th>
                                        <Th><p className='text-[#222529] text-[14px] font-bold text-center'>PRICE</p></Th>
                                        <Th><p className='text-[#222529] text-[14px] font-bold text-center'>STOCK STATUS</p></Th>
                                        <Th><p className='text-[#222529] text-[14px] font-bold text-center'>ACTIONS</p></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {tempMyWishlist.map((item, index) => <Tr key={index} borderTop={'1px'} borderColor='#E7E7E7'>
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
                                            <div className='py-[19px]'>
                                                <p className='text-center w-full truncate text-[#777] font-semibold text-[14px]'>${priceModifier(item.price)}</p>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='py-[19px] text-[14px] text-center text-[#222529] font-semibold'>
                                                {item.inStock ? <p>In stock</p> : <p className='text-[#FF0000]'>Out of stock</p>}
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='py-[19px] flex flex-col md:flex-row gap-2 justify-center items-center'>
                                                <button className='bg-[#F4F4F4] hover:bg-[#08C] text-inherit hover:text-white duration-500 px-[25px] leading-10 text-[13px] font-bold'>QUICK VIEW</button>
                                                {item.inStock ? <button className='bg-[#222529] hover:bg-[#34393f] text-white hover:text-white duration-500 px-[25px] leading-10 text-[13px] font-bold'>ADD TO CART</button> : null}
                                            </div>
                                        </Td>
                                    </Tr>)}

                                </Tbody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default WishList;