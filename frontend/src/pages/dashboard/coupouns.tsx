import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import DashboardLayout from '@/layouts/DashboardLayout';
import { priceModifier } from '@/utils/price_modifier';
import { Badge, Code, Highlight } from '@chakra-ui/react';
import { format } from 'date-fns';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

const Coupouns = () => {
    const [coupounFilter, setCoupounFilter] = useState('all');
    const [couponsData, setCoupounsData] = useState([{ status: "valid", validityStart: '2023-04-07', validityEnd: '2023-04-19', useCaseCategory: 'All', ammount: '$2.00', category: 'C', minimumBuy: 25 }, { status: "invalid", validityStart: '2023-04-15', validityEnd: '2023-04-21', useCaseCategory: 'Electronics', ammount: '20%', category: 'A', minimumBuy: 180 }, { status: "valid", validityStart: '2023-04-05', validityEnd: '2023-04-21', useCaseCategory: 'Accessories', ammount: '$5.00', category: 'B', minimumBuy: 50 }, { status: "used", validityStart: '2023-04-05', validityEnd: '2023-04-21', useCaseCategory: 'All', ammount: '$10.00', category: 'A', minimumBuy: 90 }, { status: "expired", validityStart: '2023-04-03', validityEnd: '2023-04-05', useCaseCategory: 'Accessories', ammount: '$7.00', category: 'B', minimumBuy: 43 }]);
    const filtered = couponsData.filter(item => {
        if (coupounFilter === 'all') {
            return true;
        } else if (coupounFilter === 'expired') {
            return item.status === 'expired';
        } else if (coupounFilter === 'invalid') {
            return item.status === 'invalid';
        } else if (coupounFilter === 'used') {
            return item.status === 'used';
        } else if (coupounFilter === 'valid') {
            return item.status === 'valid';
        } else {
            return true;
        }
    });
    return (
        <>
            <Head>
                <title>{`My Coupouns | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['Dashboard', 'Coupouns']} />
                <div>
                    <div className='bg-[#FCFCFC] border-[#FCFCFC] px-6 flex gap-x-12 flex-row flex-wrap text-[#222529] my-4 shadow'>
                        <p onClick={() => setCoupounFilter('all')} className={`py-4 border-b-2 hover:border-[#08c] duration-500 cursor-pointer ${coupounFilter === 'all' ? 'border-[#08c]' : 'border-transparent'} mt-2`}>All Coupouns <span className='font-bold text-[#08c]'>{couponsData.filter(item => item).length}</span></p>
                        <p onClick={() => setCoupounFilter('valid')} className={`py-4 border-b-2 hover:border-[#08c] duration-500 cursor-pointer ${coupounFilter === 'valid' ? 'border-[#08c]' : 'border-transparent'} mt-2`}>Valid Coupouns <span className='font-bold text-[#08c]'>{couponsData.filter(item => item.status === 'valid').length}</span></p>
                        <p onClick={() => setCoupounFilter('invalid')} className={`py-4 border-b-2 hover:border-[#08c] duration-500 cursor-pointer ${coupounFilter === 'invalid' ? 'border-[#08c]' : 'border-transparent'} mt-2`}>Invalid Coupouns <span className='font-bold text-[#08c]'>{couponsData.filter(item => item.status === 'invalid').length}</span></p>
                        <p onClick={() => setCoupounFilter('used')} className={`py-4 border-b-2 hover:border-[#08c] duration-500 cursor-pointer ${coupounFilter === 'used' ? 'border-[#08c]' : 'border-transparent'} mt-2`}>Used Coupouns <span className='font-bold text-[#08c]'>{couponsData.filter(item => item.status === 'used').length}</span></p>
                        <p onClick={() => setCoupounFilter('expired')} className={`py-4 border-b-2 hover:border-[#08c] duration-500 cursor-pointer ${coupounFilter === 'expired' ? 'border-[#08c]' : 'border-transparent'} mt-2`}>Expired Coupouns <span className='font-bold text-[#08c]'>{couponsData.filter(item => item.status === 'expired').length}</span></p>
                    </div>
                    <div className='flex flex-col gap-8'>
                        {filtered.map((item, index) => <div key={index} className='p-4 flex bg-[#FCFCFC] border-[#FCFCFC] shadow justify-center flex-col md:flex-row gap-4'>
                            <div className={`w-[clamp(300px,50%,350px)] text-white flex justify-center items-center font-bold text-5xl h-[150px] rounded-xl mx-auto ${item.category === 'C' ? 'bg-gradient-to-r from-[#08c] to-[#00e5ff]' : item.category === 'B' ? 'bg-gradient-to-tl from-[#08c] via-[#c0392b]  to-[#00e5ff]' : 'bg-gradient-to-br from-[#08c] via-[#27ae60] to-[#00e5ff]'}`}>
                                <p>{item.ammount} OFF</p>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-[14px]'><span className='font-semibold text-[#777]'>Validity Period: </span> <span className='text-[#222529]'>{format(new Date(item.validityStart), 'PP')} &#8211; {format(new Date(item.validityEnd), 'PP')}</span></li>
                                    <li className='text-[14px]'><span className='font-semibold text-[#777]'>Can Be Used In: </span> <span className='text-[#222529]'>{item.useCaseCategory} items in SHOP House</span></li>
                                    <li className='text-[14px]'><span className='font-semibold text-[#777]'>Coupoun Category:</span> <span className='text-[#222529]'>{item.category}</span></li>
                                    <li className='text-[14px]'><span className='font-semibold text-[#777]'>Coupoun Status: </span> <span className=' uppercase text-white'><Badge colorScheme={item.status === 'valid' ? 'green' : item.status === 'invalid' ? 'orange' : item.status === 'used' ? 'blue' : 'red'}>{item.status}</Badge></span></li>
                                    <li className='text-[14px]'><span className='font-semibold text-[#777]'>Coupoun Details: </span><span className='text-[#222529] font-bold text-base'>Get a amount of {item.ammount} discount for a minimum of ${priceModifier(item.minimumBuy)} order in {item.useCaseCategory} category of proudcts.
                                    </span></li>
                                </ul>
                            </div>
                        </div>)}
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Coupouns;