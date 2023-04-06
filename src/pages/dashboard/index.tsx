import HomeSingleProduct from '@/components/common/map/HomeSingleProduct';
import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import DashboardLayout from '@/layouts/DashboardLayout';
import { homeProductsFeatured, newArrival } from '@/utils/constants';
import { priceModifier } from '@/utils/price_modifier';
import { Alert, AlertIcon } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

const Dahboard = () => {
    return (
        <>
            <Head>
                <title>{`Dashboard | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['Dashboard']} />
                <div className='py-[20px]'>
                    <Alert status='info' my={'2.5'}>
                        <AlertIcon />
                        Hello Mr. Saki, Welcome to Shophouse Store. We hope you find everything you're looking for and enjoying your shopping.
                    </Alert>
                    <p className='text-[#222529] text-[27px] md:text-[30px] font-bold'>Top Stats</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[15px] my-2'>
                        <div className='bg-[#FDFDFD] rounded-xl shadow p-4 border-2 border-[#F3F3F3] flex justify-between'>

                            <div className='flex flex-col justify-between'>
                                <p className='text-[#888] text-xl'>Total Orders</p>
                                <p className='text-3xl font-bold my-3'>{parseInt(priceModifier(27))}</p>

                            </div>
                            <div className='h-[100px] my-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/6815/6815043.png" className='h-full' alt="" />
                            </div>
                        </div>
                        <div className='bg-[#FCFCFC] rounded-xl shadow p-4  border-2 border-[#F3F3F3] flex justify-between'>

                            <div className='flex flex-col justify-between'>
                                <p className='text-[#888] text-xl'>Average Order Value</p>
                                <p className='text-3xl font-bold my-3'>${priceModifier(696 / 27)}</p>

                            </div>
                            <div className='h-[100px] my-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/1611/1611302.png" className='h-full' alt="" />
                            </div>
                        </div>
                        <div className='bg-[#FCFCFC] rounded-xl shadow p-4  border-2 border-[#F3F3F3] flex justify-between'>
                            <div className='flex flex-col justify-between'>
                                <p className='text-[#888] text-xl'>Lifetime Order Value</p>
                                <p className='text-3xl font-bold my-3'>${priceModifier(696)}</p>


                            </div>
                            <div className='h-[100px] my-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/4266/4266200.png" className='h-full' alt="" />
                            </div>
                        </div>
                        <div className='bg-[#FCFCFC] rounded-xl shadow p-4  border-2 border-[#F3F3F3] flex justify-between'>
                            <div className='flex flex-col justify-between'>
                                <p className='text-[#888] text-xl'>Product Returned</p>
                                <p className='text-3xl font-bold my-3'>{parseInt(priceModifier(9))}</p>


                            </div>
                            <div className='h-[100px] my-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/9138/9138369.png" className='h-full' alt="" />
                            </div>
                        </div>
                        <div className='bg-[#FCFCFC] rounded-xl shadow p-4  border-2 border-[#F3F3F3] flex justify-between'>
                            <div className='flex flex-col justify-between'>
                                <p className='text-[#888] text-xl'>Refund Got</p>
                                <p className='text-3xl font-bold my-3'>${priceModifier(90)}</p>


                            </div>
                            <div className='h-[100px] my-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/3427/3427822.png" className='h-full' alt="" />
                            </div>
                        </div>
                        <div className='bg-[#FCFCFC] rounded-xl shadow p-4  border-2 border-[#F3F3F3] flex justify-between'>
                            <div className='flex flex-col justify-between'>
                                <p className='text-[#888] text-xl'>Coupouns Available</p>
                                <p className='text-3xl font-bold my-3'>{parseInt(priceModifier(5))}</p>


                            </div>
                            <div className='h-[100px] my-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/1225/1225275.png?w=826&t=st=1680796101~exp=1680796701~hmac=8a3e2ae795b34928ab03593beeb37e820d84f467b771c3891efbe134dd578752" className='h-full' alt="" />
                            </div>
                        </div>
                        <div className='bg-[#FCFCFC] rounded-xl shadow p-4  border-2 border-[#F3F3F3] flex justify-between'>
                            <div className='flex flex-col justify-between'>
                                <p className='text-[#888] text-xl'>Savings</p>
                                <p className='text-3xl font-bold my-3'>${priceModifier(69)}</p>


                            </div>
                            <div className='h-[100px] my-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/8049/8049428.png" className='h-full' alt="" />
                            </div>
                        </div>
                        <div className='bg-[#FCFCFC] rounded-xl shadow p-4  border-2 border-[#F3F3F3] flex justify-between'>
                            <div className='flex flex-col justify-between'>
                                <p className='text-[#888] text-xl'>Points Earned</p>
                                <p className='text-3xl font-bold my-3'>{parseInt(priceModifier(169))}</p>


                            </div>
                            <div className='h-[100px] my-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/8754/8754417.png" className='h-full' alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#222529] text-[27px] md:text-[30px] font-bold my-3'>Recent Product Viewed</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[15px] my-2'>
                            {newArrival.slice(0, 5).map(item => <HomeSingleProduct item={item} />)}
                        </div>
                    </div>
                    <div>
                        <p className='text-[#222529] text-[27px] md:text-[30px] font-bold my-3'>Recommanded For You</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[15px] my-2'>
                            {homeProductsFeatured.slice(0, 5).map(item => <HomeSingleProduct item={item} />)}
                        </div>
                    </div>
                    <div>
                        <p className='text-[#222529] text-[27px] md:text-[30px] font-bold my-3'>Recently Purchased</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[15px] my-2'>
                            {homeProductsFeatured.slice(0, 5).map(item => <HomeSingleProduct item={item} />)}
                        </div>
                    </div>
                </div>
                {/* <div className='h-[1000px]'>

                </div> */}
            </DashboardLayout>
        </>
    );
};

export default Dahboard;